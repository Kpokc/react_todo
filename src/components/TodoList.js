import React from "react";

import TodoListItems from "./TodoListItems";

const TodoList = () => {
    return (
      <ul>
        <li><TodoListItems label='Drink Coffee' /></li>
        <li>
            <TodoListItems 
                label='Build App' 
                important 
            />
        </li>
      </ul>
    );
}

export default TodoList;