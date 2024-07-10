const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./todo.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// Create tasks table
db.run(
  `CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    completed INTEGER
  )`
);

ipcMain.on('get-tasks', (event) => {
  db.all('SELECT * FROM tasks', [], (err, rows) => {
    if (err) {
      throw err;
    }
    event.reply('get-tasks-reply', rows);
  });
});

ipcMain.on('add-task', (event, task) => {
  db.run(`INSERT INTO tasks(title, completed) VALUES(?, ?)`, [task.title, 0], function (err) {
    if (err) {
      return console.error(err.message);
    }
    event.reply('add-task-reply', { id: this.lastID, ...task });
  });
});

ipcMain.on('delete-task', (event, id) => {
  db.run(`DELETE FROM tasks WHERE id = ?`, id, function (err) {
    if (err) {
      return console.error(err.message);
    }
    event.reply('delete-task-reply', id);
  });
});

ipcMain.on('update-task', (event, task) => {
  db.run(
    `UPDATE tasks SET title = ?, completed = ? WHERE id = ?`,
    [task.title, task.completed, task.id],
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      event.reply('update-task-reply', task);
    }
  );
});
