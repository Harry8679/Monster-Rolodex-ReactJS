import React from "react";
import './SearchBox.css';

const SearchBox = ({ onSearchHandler, placeholder, className }) => {
  return <input className={`search-box ${className}`} type="search" placeholder={placeholder} onChange={onSearchHandler} />;
};

export default SearchBox;
