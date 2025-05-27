import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ logo = "MyApp", links = [], className = "" }) => {
  return (
    <nav className={`${styles.navbar} ${className}`}>
      <div className={styles.logo}>
        {typeof logo === "string" ? <span>{logo}</span> : logo}
      </div>
      <ul className={styles.navLinks}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
