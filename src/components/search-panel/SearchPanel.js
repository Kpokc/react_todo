import React from "react";

import ItemStatusFilter from "../item-status-filter";

import './SearchPanel.css'

const SearchPanel = () => {
  
    return (
      <div className="row d-flex align-items-center">
        <div className="col-6">
          <input placeholder="search" className="w-100" />
        </div>
        <div className="col-6">
            <ItemStatusFilter />
        </div>
      </div>
    );
}

export default SearchPanel;