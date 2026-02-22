import joblib
import os
import pandas as pd

# Get base directory of backend
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

MODEL_PATH = os.path.join(BASE_DIR, "models_saved", "sales_prediction_model.pkl")

print("Loading model from:", MODEL_PATH)
print("File exists:", os.path.exists(MODEL_PATH))

model = joblib.load(MODEL_PATH)

def predict_sales(input_data: dict):
    df = pd.DataFrame([input_data])
    prediction = model.predict(df)
    return float(prediction[0])
