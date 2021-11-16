import React from "react";

import TodoListItems from "./TodoListItems";
import './static/css/TodoList.css'

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {

    const {id, ...itemProps } = item;

    return (
      <li key={ id } className="list-group-item">
          <TodoListItems { ...itemProps }
          />
      </li>
    );
  });

    return (
      <div className="row mt-3">
        <div className="col-12">
          <ul className="list-group todo-list shadow-sm">
            { elements }
          </ul>
        </div>
      </div>
    );
}

export default TodoList;