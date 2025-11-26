import requests
from datetime import datetime
from zoneinfo import ZoneInfo

from flask import Flask, request, jsonify
from pydantic_core import ValidationError
from flask_cors import CORS

from schemas import MessageSchema
from bot_config import config
import json

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": json.loads(config["ORIGINS"])}})

@app.route("/send", methods=["POST"])
def send_message():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No JSON received"}), 400
    try:
        message_data = MessageSchema.model_validate(data)
    except ValidationError:
        return jsonify({"error": "Wrong body format"}), 400
    time = datetime.now(ZoneInfo(config["ZONE_INFO"])).strftime("%B %d, %Y %H:%M:%S")
    
    message_text = f"""
📩 Новая заявка c RGPersonalAlpha

Время: {time}
Имя: {message_data.name}  
Контакт: {message_data.contact}  
Тема: {message_data.theme}  

Сообщение:  
{message_data.message}
"""
        
    requests.post("http://telegram_bot:8080/send", json={"text": message_text})

    return jsonify({"status": "message sent"}), 200

if __name__ == "__main__":
    app.run(port=5000)