from fastapi import APIRouter
import pandas as pd
import os

router = APIRouter()

DATA_PATH = os.path.join("data", "superstore_clean.csv")

@router.get("/kpi-summary")
def get_kpis():

    if not os.path.exists(DATA_PATH):
        return {"error": "Dataset not found"}

    df = pd.read_csv(DATA_PATH)

    total_sales = float(df["Sales"].sum())
    total_profit = float(df["Profit"].sum())
    total_orders = int(df["Order_ID"].nunique())
    total_customers = int(df["Customer_ID"].nunique())

    # 🔥 Sales by Region
    sales_by_region = (
        df.groupby("Region")["Sales"]
        .sum()
        .reset_index()
        .to_dict(orient="records")
    )

    return {
        "total_sales": total_sales,
        "total_profit": total_profit,
        "total_orders": total_orders,
        "total_customers": total_customers,
        "sales_by_region": sales_by_region
    }