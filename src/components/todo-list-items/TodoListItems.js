import React, { Component } from "react";

import './TodoListItems.css'

export default class TodoListItems extends Component{

    render () {

        // To get access to all function props
        const { label, important = false } = this.props;
    
        const style = {
            color: important ? 'tomato' : 'black'
        }
    
        return (
          <div className="row">
              <div className="col-12">
                  <div className="list-text"> 
                      <span 
                          style={ style }
                          className="todo-list-item">
                          { label }
                      </span>
                  </div>
                  <div className="list-icons">
                      <span>
                        <button type="button" className="btn"><i class="fas fa-trash-alt"></i></button>
                        <button type="button" className="btn"><i class="fas fa-exclamation-triangle"></i></button>
                      </span>
                  </div>
                </div>
          </div>
        );

    }
}