import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-bar-container">
      <input
        type="text"
        placeholder="Buscar piso..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="search-bar"
      />
      <button type="submit" className="search-bar-btn">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
