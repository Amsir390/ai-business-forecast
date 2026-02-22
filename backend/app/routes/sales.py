from fastapi import APIRouter
from app.services.sales_service import predict_sales
from app.schemas.request_models import SalesPredictionRequest

router = APIRouter()

@router.post("/predict-sales")
def sales_prediction(data: SalesPredictionRequest):

    prediction = predict_sales(data.dict())

    return {
        "predicted_sales": prediction
    }