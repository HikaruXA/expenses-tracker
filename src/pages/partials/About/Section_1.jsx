import React from "react";
import styles from "../../../styles/Section_1.module.css";

const Section_1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.description}>
          We are a team of passionate developers, designers, and thinkers
          dedicated to building exceptional digital experiences. Our mission is
          to turn ideas into reality through innovative solutions and
          cutting-edge technology.
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <p className={styles.featureTitle}>Innovation</p>
            <p className={styles.featureText}>
              We thrive on creativity and new ideas.
            </p>
          </div>
          <div className={styles.feature}>
            <p className={styles.featureTitle}>Teamwork</p>
            <p className={styles.featureText}>
              Collaboration is at the core of everything we do.
            </p>
          </div>
          <div className={styles.feature}>
            <p className={styles.featureTitle}>Impact</p>
            <p className={styles.featureText}>
              We aim to make a meaningful difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_1;
