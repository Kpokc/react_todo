import React, { Component } from "react";

import './TodoListItems.css'

export default class TodoListItems extends Component{

    render () {

        // destructuring
        // Access to itemprops from ToDoList.js
        const { label, onDeleted,
                onToggleImportant,
                onToggleDone,
                important,
                done } = this.props;

        // Standard className
        let classNames = 'todo-list-item';

        // added done className
        if (done) {
            classNames += ' done';
        }

        // added important className
        if (important) {
            classNames += ' important';
        }
    
        return (
          <div className="row">
              <div className="col-12">
                  <div className="list-text"> 
                      <span 
                          className={ classNames }
                          onClick={ onToggleDone }
                          >
                          { label }
                      </span>
                  </div>
                  <div className="list-icons">
                      <span>
                            <button type="button" 
                                    className="btn"
                                    onClick={ onDeleted }>
                                        <i className="fas fa-trash-alt"></i>
                            </button>
                            <button type="button" 
                                    className="btn"
                                    onClick={ onToggleImportant }
                                    >
                                        <i className="fas fa-exclamation-triangle"></i>
                            </button>
                      </span>
                  </div>
                </div>
          </div>
        );

    }
}