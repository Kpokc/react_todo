import React, { Component } from "react";

import ItemStatusFilter from "../item-status-filter";

import './SearchPanel.css'

export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  onSearchChange = (e) => {
    this.setState({ term:e.target.value });
    this.props.onSearchChange(e.target.value);
  };
  
  render () {

    const { filter, onSearchChange } = this.props;

    return (
      <div className="row d-flex align-items-center">
        <div className="col-6">
          <input placeholder="search" 
                 className="w-100" 
                 value={ this.state.term } />
        </div>
        <div className="col-6">
            <ItemStatusFilter 
              filter={filter} />
        </div>
      </div>
    );
  }
}