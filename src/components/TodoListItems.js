import React from "react";

import './static/css/TodoListItems.css'

const TodoListItems = ( { label, important = false } ) => {
    
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
                    <i class="fas fa-trash-alt"></i>
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
              </div>
            </div>
      </div>
    );
}

export default TodoListItems;