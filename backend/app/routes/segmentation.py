from fastapi import APIRouter
from app.services.segmentation_service import predict_cluster
from app.schemas.request_models import SegmentationRequest

router = APIRouter()

@router.post("/predict-cluster")
def cluster_prediction(data: SegmentationRequest):

    cluster = predict_cluster(
        data.sales,
        data.profit,
        data.order_frequency
    )

    return {
        "customer_cluster": cluster
    }