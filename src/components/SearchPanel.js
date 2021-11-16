import React from "react";

import './static/css/SearchPanel.css'

const SearchPanel = () => {
  
    return (
      <div className="row d-flex align-items-center">
        <div className="col-6">
          <input placeholder="search" className="w-100" />
        </div>
        <div className="col-6">
        <button type="button" className="btn btn-outline-secondary btn-sm m-1 main-btn shadow-sm">All</button>
        <button type="button" className="btn btn-outline-secondary btn-sm m-1 main-btn shadow-sm">Active</button>
        <button type="button" className="btn btn-outline-secondary btn-sm m-1 main-btn shadow-sm">Done</button>
        </div>
      </div>
    );
}

export default SearchPanel;