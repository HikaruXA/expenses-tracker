import React from "react";
import styles from "../styles/InfoCard.module.css"; // Assuming you have a CSS module for styling

const InfoCard = ({ title, description, onClick }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onClick}>
          Show →
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
