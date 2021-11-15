import React from "react";

const SearchPanel = () => {

    const searchStyle = {
      fontSize: '25px',
      background: 'red'
    };
  
    return (
      <input 
        placeholder="search"
        style={searchStyle} 
      />
    );
}

export default SearchPanel;