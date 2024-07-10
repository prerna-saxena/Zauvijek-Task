const { ipcRenderer } = window.require('electron');

export const getTasks = () => {
    ipcRenderer.send('get-tasks');
};

export const addTask = (task) => {
    ipcRenderer.send('add-task', task);
};

ipcRenderer.on('tasks', (event, tasks) => {
    console.log('Tasks received:', tasks);
    // Update your React state with the received tasks
});

ipcRenderer.on('task-added', (event, task) => {
    console.log('Task added:', task);
    // Optionally, handle the acknowledgment or update state
});
