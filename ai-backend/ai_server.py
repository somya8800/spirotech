from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route("/ai-status")
def ai_status():
    status_list = ["NORMAL", "WARNING", "ALERT"]

    return jsonify({
        "status": random.choice(status_list),
        "confidence": round(random.uniform(85, 98), 2)
    })

app.run(host="0.0.0.0", port=5000)
