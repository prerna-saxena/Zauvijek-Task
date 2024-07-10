 Combine Components in App
Create src/App.js:

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
