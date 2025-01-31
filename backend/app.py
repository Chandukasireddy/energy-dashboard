from flask import Flask, jsonify
import random

app = Flask(__name__)

# Function to create fake energy data
def generate_energy_data():
    countries = ["Germany", "France", "Italy", "Spain", "Poland"]
    data = []
    for country in countries:
        price = round(random.uniform(20, 100), 2)  # fake price
        demand = random.randint(1000, 5000)         # fake demand
        data.append({"country": country, "price": price, "demand": demand})
    return data

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(generate_energy_data())

if __name__ == '__main__':
    # Run the server on all network interfaces (for Codespaces)
    app.run(debug=True, host='0.0.0.0', port=5000)
