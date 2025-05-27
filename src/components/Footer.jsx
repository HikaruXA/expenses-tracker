import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    // Test again
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
