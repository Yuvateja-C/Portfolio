import requests
from prompts import get_prompt

def evaluate_idea(idea, mode):
    prompt = get_prompt(mode, idea)

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3",
            "prompt": prompt,
            "stream": False
        }
    )

    data = response.json()

    print("DEBUG:", data)  # for checking

    if "error" in data:
        return f"Error from AI: {data['error']}"

    return data.get("response", "")