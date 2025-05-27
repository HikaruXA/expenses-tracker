import React from "react";
import styles from "../../../styles/Hero.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Track Your Spending
          <br />
          Take Control of Your Finances
        </h1>
        <p className={styles.subtitle}>
          Easily monitor expenses, set budgets, and stay on top of your
          financial goals—all in one place
        </p>
      </div>
      <div className={styles.imageContainer}></div>
      <button className={styles.button}>Start Now</button>
    </section>
  );
};

export default HeroSection;
