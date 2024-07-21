import React from "react";
import './SearchBox.css';

const SearchBox = ({ onSearchHandler, placeholder }) => {
  return <input type="search" placeholder={placeholder} onChange={onSearchHandler}/>;
};

export default SearchBox;
