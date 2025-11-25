from dotenv import dotenv_values
from pathlib import Path
import sqlite3

env_path = Path(__file__).parent / '.env'

config = dotenv_values(dotenv_path=env_path)

if config["DATABASE_FILENAME"] is None:
        raise ValueError("DATABASE_FILENAME is required in .env")

DATABASE_FILENAME = config["DATABASE_FILENAME"] + ".db"

def init_database():
    with sqlite3.connect(DATABASE_FILENAME) as conn:
        cursor = conn.cursor()
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name NVARCHAR(255) NOT NULL,
            contact NVARCHAR(255) NOT NULL,
            theme NVARCHAR(255) NOT NULL,
            message NVARCHAR(1280) NOT NULL
        )
        ''')
        conn.commit()