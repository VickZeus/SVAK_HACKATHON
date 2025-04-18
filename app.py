from flask import Flask, render_template, request, jsonify # type: ignore

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')  # Render the index.html file

@app.route('/submit', methods=['POST'])
def submit():
    # Retrieve the form data
    query = request.form.get('query')  # Get the 'query' input from the form

    # Print the data to the console (for debugging purposes)
    print(f"Query received: {query}")

    # Return a JSON response
    return jsonify({"status": "success", "query":query})

if __name__ == '__main__':
    app.run(debug=True)