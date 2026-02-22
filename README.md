
# 📊 AI Business Analytics Dashboard

A full-stack AI-powered Business Analytics Dashboard built using FastAPI, Machine Learning, and React.

This platform predicts sales using ML models and provides interactive KPI visualizations for business insights.

---

## 🚀 Tech Stack

### Backend
- FastAPI
- Scikit-Learn
- Pandas / NumPy
- Uvicorn

### Frontend
- React (Vite)
- Axios
- Recharts
- Bootstrap

### Deployment
- Backend → Render
- Frontend → Vercel

---

## ✨ Features

### 🔮 Sales Prediction
Predict sales based on:
- Ship Mode
- Customer Segment
- Region
- Product Category
- Quantity
- Discount

### 📊 KPI Dashboard
- Total Sales
- Total Profit
- Total Orders
- Total Customers
- Region-wise Sales Chart
- Animated Gradient Bar Visualizations
- Modern SaaS UI

---

## 🖼 Screenshot

![dashboard.png](dashboard.png)

> Add your screenshot file in the root folder and name it `dashboard.png`

---

## 📁 Project Structure

```

BUSINESS_AI_PLATFORM/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   └── services/
│   │       └── segmentation_service.py
│   ├── data/
│   │   └── superstore_clean.csv
│   ├── models_saved/
│   │   ├── sales_prediction_model.pkl
│   │   └── customer_scaler.pkl
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── index.html

```

---

## ⚙️ Run Locally

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Open:

```
http://127.0.0.1:8000/docs
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌍 Deployment Guide

### 🔹 Deploy Backend on Render

1. Go to [https://render.com](https://render.com)
2. New → Web Service
3. Select your GitHub repo

**Settings**

* Root Directory:

```
backend
```

* Environment:

```
Python
```

* Build Command:

```
pip install -r requirements.txt
```

* Start Command:

```
uvicorn app.main:app --host 0.0.0.0 --port 10000
```

---

### 🔹 Add CORS (Important)

In `backend/app/main.py`:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

Push changes and redeploy.

---

### 🔹 Deploy Frontend on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Import GitHub repository
3. Set Root Directory:

```
frontend
```

4. Build Command:

```
npm run build
```

5. Output Directory:

```
dist
```

---

### 🔹 Update API URL

In `App.jsx`:

```javascript
const API = "https://your-render-url.onrender.com";
```

Push changes and redeploy frontend.

---



## 📈 Use Case

This project demonstrates:

* End-to-end ML model integration
* REST API development
* Modern React frontend
* Data visualization
* Full-stack deployment
* Production-ready architecture

Ideal for:

* Portfolio projects
* Resume showcasing
* AI/ML internship applications
* Full-stack developer roles

---

## 👨‍💻 Author

Ankush Maity
B.Tech CSE | AI-ML & Full-Stack Developer

---

## ⭐ If you found this useful, consider giving it a star!




