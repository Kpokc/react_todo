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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make new App'),
      this.createTodoItem('Go for fag')
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

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

    if (text !== "" ){
      	// Gen ID
      const newItem = this.createTodoItem(text);

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
    } else {
      alert("Please add a todo note!");
    }
    

  };

  togglePropData(arr, id, propName){

    arr.map((item) => {
      if (item.id === id){
        item[propName] = !item[propName];
      }
    });

    return arr;
  }
  
  onToggleDone = (id) => {

    this.setState(( { todoData } ) => {
      return {
        todoData: this.togglePropData(todoData, id, 'done')
      };
    });
    
  };
  
  onToggleImportant = (id) => {
    this.setState(( { todoData } ) => {

      return {
        todoData: this.togglePropData(todoData, id, 'important')
      };
    });

  };


  render () {

    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const toDoCount = this.state.todoData.length - doneCount;

    return (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-4 bg-light p-3 border shadow-sm rounded m-auto">
            {/* Vars pass to AppHeader */}
            <AppHeader todo={toDoCount} done={doneCount} />
            <SearchPanel />
            <TodoList 
              todos={ this.state.todoData }  
              onDeleted={ this.deleteItem }
              onToggleImportant={ this.onToggleImportant}
              onToggleDone={ this.onToggleDone } 
              />
            <AddItemForm onAddItem={ this.addItem }/>
          </div>
        </div>
      </div>
    );
  }
}
