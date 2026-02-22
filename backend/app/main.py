from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import sales, segmentation, analytics

app = FastAPI(title="AI Business Analytics Platform")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(sales.router)
app.include_router(segmentation.router)
app.include_router(analytics.router)