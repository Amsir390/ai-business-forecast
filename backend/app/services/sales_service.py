import joblib
import os
import pandas as pd

MODEL_PATH = os.path.join("models_saved", "sales_prediction_model.pkl")

model = joblib.load(MODEL_PATH)

def predict_sales(input_data: dict):

    df = pd.DataFrame([input_data])
    prediction = model.predict(df)

    return float(prediction[0])