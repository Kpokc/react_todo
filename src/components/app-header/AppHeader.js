import React from "react";

import './AppHeader.css'


const AppHeader = ({ todo, done }) => {

    return (
      <div className="row d-flex align-items-center">
        <div className="col-6">
          <h3>Todo App</h3>
        </div>
        <div className="col-6">
          <span className="overall-data">
            <strong>
              { todo } more to do, { done } done
            </strong>
          </span>
        </div>
      </div>
    );
}

export default AppHeader;