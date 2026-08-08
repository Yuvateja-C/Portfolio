from flask import Flask, render_template, request

app = Flask(__name__)

def analyze_mood(text):
    text = text.lower()

    if any(word in text for word in ["sad", "tired", "alone", "depressed"]):
        return {
            "mood": "Low",
            "line": "Even the darkest nights end with sunrise.",
            "action": "Take a short walk or listen to your favorite song."
        }
    elif any(word in text for word in ["happy", "excited", "great"]):
        return {
            "mood": "High",
            "line": "This is your moment — live it fully.",
            "action": "Capture this feeling. Write it down."
        }
    else:
        return {
            "mood": "Neutral",
            "line": "You're in between — and that's okay.",
            "action": "Pause. Breathe. Reset."
        }

@app.route("/", methods=["GET", "POST"])
def home():
    result = None
    if request.method == "POST":
        user_input = request.form["text"]
        result = analyze_mood(user_input)
    return render_template("index.html", result=result)

if __name__ == '__main__':
    app.run(debug=True)