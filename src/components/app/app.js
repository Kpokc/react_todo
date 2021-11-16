import React from 'react';

import './app.css'

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make new App', important: true, id: 2 },
    { label: 'Go for fag', important: false,  id: 3 }
  ];

  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-4 bg-light p-3 border shadow-sm rounded m-auto">
          <AppHeader />
          <SearchPanel />
          <TodoList todos={todoData} />
        </div>
      </div>
    </div>
  );
}

export default App;