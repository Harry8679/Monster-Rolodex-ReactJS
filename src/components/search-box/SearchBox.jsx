import React from "react";
import './SearchBox.css';

const SearchBox = ({ onSearchHandler }) => {
  return <input type="search" placeholder="Search monsters" onChange={onSearchHandler}/>;
};

export default SearchBox;
