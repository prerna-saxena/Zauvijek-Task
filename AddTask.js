Create src/components/AddTask.js:

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, completed: 0 };
    window.electron.send('add-task', task);
    window.electron.receive('add-task-reply', (newTask) => {
      dispatch(addTask(newTask));
      setTitle('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;

