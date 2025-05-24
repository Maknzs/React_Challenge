import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={styles.navBar}>
        <Link to="/posts" className={styles.logo}>
          Blog Application
        </Link>
        <div className={styles.links}>
          <Link to="/posts">Home</Link>
          <Link to="/posts/new">New Post</Link>
        </div>
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>
      <div
        className={
          `${styles.mobileMenu} ` + (isMobileMenuOpen ? styles.open : "")
        }
        aria-hidden={!isMobileMenuOpen}
      >
        <Link to="/posts" onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link to="/posts/new" onClick={toggleMobileMenu}>
          New Post
        </Link>
      </div>
    </>
  );
};

export default NavBar;
