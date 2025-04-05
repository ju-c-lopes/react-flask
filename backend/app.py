"""
This is the main application file for the Flask backend.

It initializes the Flask app and defines the routes for the application.
"""

from flask import Flask


app = Flask(__name__)


@app.route("/")
def hello_world():
    """
    Returns a greeting message.

    This function returns a simple "Hello, World!" string.

    Returns:
        str: A greeting message.
    """
    return "Hello, World!"


if __name__ == "__main__":
    app.run()
