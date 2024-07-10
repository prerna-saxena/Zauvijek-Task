Implement CRUD operations
Create another Python file named crud.py and add the following code to implement the CRUD operations:

import sqlite3

def create_connection():
    conn = None
    try:
        conn = sqlite3.connect('todo.db')
    except sqlite3.Error as e:
        print(f"The error '{e}' occurred")
    return conn

def add_task(title, description):
    conn = create_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO tasks (title, description) VALUES (?, ?)", (title, description))
    conn.commit()
    conn.close()

def get_tasks():
    conn = create_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tasks")
    tasks = cursor.fetchall()
    conn.close()
    return tasks

def update_task(task_id, title=None, description=None, status=None):
    conn = create_connection()
    cursor = conn.cursor()
    if title:
        cursor.execute("UPDATE tasks SET title = ? WHERE id = ?", (title, task_id))
    if description:
        cursor.execute("UPDATE tasks SET description = ? WHERE id = ?", (description, task_id))
    if status:
        cursor.execute("UPDATE tasks SET status = ? WHERE id = ?", (status, task_id))
    conn.commit()
    conn.close()

def delete_task(task_id):
    conn = create_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    conn.commit()
    conn.close()

if __name__ == "__main__":
    # Example usage
    add_task("Task 1", "Description for Task 1")
    add_task("Task 2", "Description for Task 2")

    tasks = get_tasks()
    for task in tasks:
        print(task)

    update_task(1, status="completed")

    delete_task(2)

    tasks = get_tasks()
    for task in tasks:
        print(task)
