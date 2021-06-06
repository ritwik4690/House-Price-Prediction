# -*- coding: utf-8 -*-
"""
Created on Sun Jun  6 13:13:19 2021

@author: Lenovo
"""
from flask import Flask, request, jsonify
import util
app = Flask(__name__)

@app.route("/locations")
def get_location_names():
    response = jsonify({
        'locations':util.get_location_names()
        })
    response.headers.add('Access-Control-Allow-Origin','*')
    
    return response

@app.route('/predict', methods=['POST'])
def predict_home_price():
    total_sqft = float(request.form['total_sqft'])
    location = request.form['location']
    bhk = int(request.form['bhk'])
    bath = int(request.form['bath'])
    
    response = jsonify({
        'estimated_price': util.get_estimated_price(location, total_sqft, bhk, bath)
        })
    
    response.headers.add('Access-Control-Allow-Origin','*')
    
    return response

if __name__ == "__main__":
    print('Server up and running')
    util.load_saved_artifacts()
    app.run()
    