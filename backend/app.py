from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
# Configure to allow cross-origin requests from any domain.
CORS(app, resources={r"/*": {"origins": "*"}})

# Optional: Force HTTPS for generated URLs (if needed)
app.config['PREFERRED_URL_SCHEME'] = 'https'

def generate_energy_data():
    # Sample countries
    countries = ["Germany", "France", "Italy", "Spain", "Poland"]
    data = []
    # Generate fake data for each country
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
