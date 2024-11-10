from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for specific domains, methods, and headers
CORS(app, resources={
    r"/*": {
        "origins": "http://localhost:5000",  # Allow only requests from example.com
        "methods": ["GET", "POST"],       # Allow only GET and POST methods
        "allow_headers": ["Authorization", "Content-Type"]  # Allow specific headers
    }
})

@app.route("/")
def hello_world():
    return "Hello world"

if __name__ == "__main__":
    app.run(debug=True)