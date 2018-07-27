#!/usr/bin/env python
import os
import requests

from flask import Flask, send_from_directory, jsonify, redirect, request

app = Flask(__name__, static_folder='react/build')

# Serve React App
@app.route('/')
def index():
    return send_from_directory('react/build', 'index.html')


@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists('react/build/' + path):
        return send_from_directory('react/build', path)

    return redirect('/')


# Internal API Routes
@app.route('/api/search')
def search():
    # Proxy search request to bypass CORS
    url = 'https://api.viperidae.app/search'

    get_request = requests.get(url, params=request.args)
    return jsonify(get_request.text)


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)
