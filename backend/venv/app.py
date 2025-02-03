from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
# Enable CORS for all routes
CORS(app, resources={r"/*": {"origins": "*"}})

def generate_energy_data():
    countries = ["Germany", "France", "Italy", "Spain", "Poland"]
    data = []
    for country in countries:
        price = round(random.uniform(20, 100), 2)
        demand = random.randint(1000, 5000)
        data.append({"country": country, "price": price, "demand": demand})
    return data

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(generate_energy_data())

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
