import streamlit as st
import json
import re

from evaluator import evaluate_idea
from database import create_tables, save_idea, connect_db
from auth import login, register

# Initialize database
create_tables()

# Session state
if "user" not in st.session_state:
    st.session_state.user = None

st.set_page_config(page_title="InvestorLens AI", layout="centered")

st.title("🧠 InvestorLens AI")

menu = st.sidebar.selectbox("Menu", ["Login", "Register", "Dashboard"])

# ---------------- REGISTER ----------------
if menu == "Register":
    st.subheader("Create Account")

    user = st.text_input("Username")
    pwd = st.text_input("Password", type="password")

    if st.button("Register"):
        if user and pwd:
            register(user, pwd)
            st.success("Registered successfully!")
        else:
            st.warning("Please fill all fields")

# ---------------- LOGIN ----------------
elif menu == "Login":
    st.subheader("Login")

    user = st.text_input("Username")
    pwd = st.text_input("Password", type="password")

    if st.button("Login"):
        result = login(user, pwd)
        if result:
            st.session_state.user = user
            st.success("Logged in!")
        else:
            st.error("Invalid credentials")

# ---------------- DASHBOARD ----------------
elif menu == "Dashboard":

    if st.session_state.user is None:
        st.warning("Please login first")
    else:
        st.success(f"Welcome {st.session_state.user}")

        mode = st.selectbox("Investor Mode", ["Friendly", "Strict", "Shark"])

        idea = st.text_area("Enter your idea")

        if st.button("Evaluate"):

            if not idea.strip():
                st.warning("Please enter an idea")
            else:
                with st.spinner("Analyzing..."):

                    result = evaluate_idea(idea, mode)

                    # ✅ SAFE JSON EXTRACTION
                    try:
                        json_match = re.search(r"\{.*\}", result, re.DOTALL)

                        if json_match:
                            json_str = json_match.group()
                            data = json.loads(json_str)

                            st.subheader("📊 Results")

                            score = data.get("score", 0)
                            verdict = data.get("verdict", "N/A")
                            reason = data.get("reason", "")

                            st.write("### Score:", score)
                            st.progress(score / 100)

                            st.write("### Verdict:", verdict)
                            st.write("### Reason:", reason)

                            # Save to database
                            save_idea(
                                st.session_state.user,
                                idea,
                                score,
                                verdict
                            )

                        else:
                            raise ValueError("No JSON found")

                    except:
                        st.warning("⚠️ AI response not structured. Showing raw output:")
                        st.write(result)

        # ---------------- LEADERBOARD ----------------
        st.subheader("🏆 Leaderboard")

        conn = connect_db()
        cursor = conn.cursor()

        cursor.execute("""
            SELECT idea, score 
            FROM ideas 
            ORDER BY score DESC 
            LIMIT 5
        """)

        rows = cursor.fetchall()

        if rows:
            for r in rows:
                st.write(f"{r[0]} → {r[1]}")
        else:
            st.write("No ideas evaluated yet")