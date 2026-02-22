from pydantic import BaseModel

class SalesPredictionRequest(BaseModel):
    Ship_Mode: str
    Segment: str
    Region: str
    Category: str
    Sub_Category: str
    Quantity: int
    Discount: float


class SegmentationRequest(BaseModel):
    sales: float
    profit: float
    order_frequency: int