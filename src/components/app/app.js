import React, { Component } from 'react';

import './app.css'

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItemForm from '../add-item-form';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make new App', important: true, id: 2 },
      { label: 'Go for fag', important: false,  id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(( { todoData } ) => {
      // Get index by matching an id
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx+1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    // Gen ID
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    // Add into array
    this.setState(({ todoData }) => {

      const newArray = [
        ...todoData, 
        newItem
      ];
  
      return {
        todoData: newArray
      };
    });
    
  };

  render () {
    return (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-4 bg-light p-3 border shadow-sm rounded m-auto">
            <AppHeader />
            <SearchPanel />
            <TodoList 
              todos={ this.state.todoData }  
              onDeleted={ this.deleteItem } />
            <AddItemForm onAddItem={ this.addItem }/>
          </div>
        </div>
      </div>
    );
  }
}
