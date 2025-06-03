import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  const toggleMobileSearch = () => {
    setIsMobileExpanded(!isMobileExpanded);
    if (isMobileExpanded) {
      setQuery("");
      onSearch("");
    }
  };

  return (
    <div className={styles.searchContainter}>
      <div
        className={`${styles.searchWrapper} ${
          isMobileExpanded ? styles.mobileExpanded : ""
        }`}
      >
        <label htmlFor="search-input" className={styles.srOnly}>
          Search Blog Posts
        </label>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search Posts..."
          className={styles.searchInput}
          autoFocus={isMobileExpanded}
          aria-live="polite"
        />
        {isMobileExpanded ? (
          <button
            onClick={toggleMobileSearch}
            className={styles.cancelButton}
            aria-label="Cancel Search"
          >
            <FaTimes />
          </button>
        ) : (
          <button
            onClick={toggleMobileSearch}
            className={styles.searchButton}
            aria-label="Expand Search"
          >
            <FaSearch />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
