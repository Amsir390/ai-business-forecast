import joblib
import os
import numpy as np

MODEL_PATH = os.path.join("models_saved", "customer_segmentation_model.pkl")
SCALER_PATH = os.path.join("models_saved", "customer_scaler.pkl")

kmeans = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

def predict_cluster(sales, profit, frequency):

    data = np.array([[sales, profit, frequency]])
    scaled = scaler.transform(data)

    cluster = kmeans.predict(scaled)

    return int(cluster[0])