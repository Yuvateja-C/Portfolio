def get_prompt(mode, idea):
    base_prompt = f"""
You are a startup evaluator.

STRICT RULE:
Return ONLY valid JSON. No extra text.

Evaluate this idea:

{idea}

Return in this format:
{{
  "score": number (0-100),
  "verdict": "Invest or Reject",
  "reason": "short explanation"
}}
"""

    if mode == "Shark":
        return "You are a harsh investor.\n" + base_prompt
    elif mode == "Strict":
        return "You are a strict evaluator.\n" + base_prompt
    else:
        return "You are a friendly mentor.\n" + base_prompt