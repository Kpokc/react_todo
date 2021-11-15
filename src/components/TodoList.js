import React from "react";

import TodoListItems from "./TodoListItems";
import './static/css/TodoList.css'

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {

    const {id, ...itemProps } = item;

    return (
      <li key={ id } className="list-group-item">
          <TodoListItems { ...itemProps }
            // label={ item.label }
            // important={ item.important }
          />
      </li>
    );
  });

    return (
      <ul className="list-group todo-list">
        { elements }
      </ul>
    );
}

export default TodoList;