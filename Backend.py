import sqlite3

def create_connection():
    conn = None
    try:
        conn = sqlite3.connect('todo.db')
        print("Connection to SQLite DB successful")
    except sqlite3.Error as e:
        print(f"The error '{e}' occurred")
    return conn

def create_table(conn):
    create_tasks_table = """
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        status TEXT NOT NULL DEFAULT 'pending'
    );
    """
    try:
        cursor = conn.cursor()
        cursor.execute(create_tasks_table)
        print("Table created successfully")
    except sqlite3.Error as e:
        print(f"The error '{e}' occurred")

if __name__ == "__main__":
    connection = create_connection()
    if connection:
        create_table(connection)
        connection.close()
