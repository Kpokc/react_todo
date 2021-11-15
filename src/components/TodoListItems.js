import React from "react";

import './static/css/TodoListItems.css'

const TodoListItems = ( { label, important = false } ) => {
    
    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
      <span 
            style={ style }
            className="todo-list-item">
        { label }
      </span>
    );
}

export default TodoListItems;