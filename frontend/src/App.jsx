import { useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  ResponsiveContainer,
} from "recharts";

const API = "http://127.0.0.1:8000";

export default function App() {
  const [formData, setFormData] = useState({
    Ship_Mode: "Second Class",
    Segment: "Consumer",
    Region: "West",
    Category: "Technology",
    Sub_Category: "Phones",
    Quantity: 2,
    Discount: 0.1,
  });

  const [prediction, setPrediction] = useState(null);
  const [kpi, setKpi] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const predictSales = async () => {
    setLoading(true);
    const res = await axios.post(`${API}/predict-sales`, formData);
    setPrediction(res.data.predicted_sales);
    setLoading(false);
  };

  const loadKPI = async () => {
    const res = await axios.get(`${API}/kpi-summary`);
    setKpi(res.data);
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand">AI Business Analytics Dashboard</span>
      </nav>

      <div className="container mt-4">
        {/* SALES PREDICTION CARD */}
        <div className="card shadow mb-4">
          <div className="card-body">
            <h4 className="mb-3">Sales Prediction</h4>

            <div className="row g-3">
              <div className="col-md-4">
                <select
                  className="form-select"
                  name="Ship_Mode"
                  onChange={handleChange}
                >
                  <option>First Class</option>
                  <option>Second Class</option>
                  <option>Standard Class</option>
                  <option>Same Day</option>
                </select>
              </div>

              <div className="col-md-4">
                <select
                  className="form-select"
                  name="Segment"
                  onChange={handleChange}
                >
                  <option>Consumer</option>
                  <option>Corporate</option>
                  <option>Home Office</option>
                </select>
              </div>

              <div className="col-md-4">
                <select
                  className="form-select"
                  name="Region"
                  onChange={handleChange}
                >
                  <option>East</option>
                  <option>West</option>
                  <option>Central</option>
                  <option>South</option>
                </select>
              </div>

              <div className="col-md-4">
                <select
                  className="form-select"
                  name="Category"
                  onChange={handleChange}
                >
                  <option>Furniture</option>
                  <option>Office Supplies</option>
                  <option>Technology</option>
                </select>
              </div>

              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control"
                  name="Quantity"
                  placeholder="Quantity"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="Discount"
                  placeholder="Discount"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className="btn btn-primary mt-3" onClick={predictSales}>
              {loading ? "Predicting..." : "Predict Sales"}
            </button>

            {prediction && (
              <div className="alert alert-success mt-3">
                Predicted Sales: ₹ {prediction.toFixed(2)}
              </div>
            )}
          </div>
        </div>

        {/* KPI CARD */}
        <div className="card shadow">
          <div className="card-body">
            <h4 className="mb-3">KPI Summary</h4>

            <button className="btn btn-dark mb-3" onClick={loadKPI}>
              Load KPIs
            </button>

            {kpi && (
              <>
                <div className="row text-center mb-4">
                  <div className="col-md-3">
                    <h6>Total Sales</h6>
                    <h5>₹ {kpi.total_sales.toFixed(2)}</h5>
                  </div>
                  <div className="col-md-3">
                    <h6>Total Profit</h6>
                    <h5>₹ {kpi.total_profit.toFixed(2)}</h5>
                  </div>
                  <div className="col-md-3">
                    <h6>Total Orders</h6>
                    <h5>{kpi.total_orders}</h5>
                  </div>
                  <div className="col-md-3">
                    <h6>Total Customers</h6>
                    <h5>{kpi.total_customers}</h5>
                  </div>
                </div>

                {/* 🔥 BAR CHART ALL REGIONS */}
                <div style={{ height: 400 }}>
                  <ResponsiveContainer>
                    <BarChart data={kpi.sales_by_region}>
                      <defs>
                        <linearGradient
                          id="barGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#6366f1">
                            <animate
                              attributeName="stop-color"
                              values="#6366f1;#8b5cf6;#6366f1"
                              dur="4s"
                              repeatCount="indefinite"
                            />
                          </stop>
                          <stop offset="100%" stopColor="#4f46e5" />
                        </linearGradient>
                      </defs>

                      <XAxis dataKey="Region" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="Sales"
                        fill="url(#barGradient)"
                        radius={[10, 10, 0, 0]}
                        animationDuration={1200}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
