import React from "react";

import './AppHeader.css'


const AppHeader = () => {

    return (
      <div className="row d-flex align-items-center">
        <div className="col-6">
          <h3>Todo App</h3>
        </div>
        <div className="col-6">
          <span className="overall-data">
            <strong>
              1 more to do, 3 done
            </strong>
          </span>
        </div>
      </div>
    );
}

export default AppHeader;