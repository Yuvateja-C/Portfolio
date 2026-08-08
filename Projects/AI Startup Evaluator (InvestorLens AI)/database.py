import sqlite3

def connect_db():
    return sqlite3.connect("data.db", check_same_thread=False)

def create_tables():
    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        password TEXT
    )
    """)

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS ideas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT,
        idea TEXT,
        score INTEGER,
        verdict TEXT
    )
    """)

    conn.commit()
    conn.close()

def save_idea(user, idea, score, verdict):
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO ideas (user, idea, score, verdict) VALUES (?, ?, ?, ?)",
        (user, idea, score, verdict)
    )
    conn.commit()
    conn.close()