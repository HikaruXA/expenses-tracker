import React from "react";
import styles from "../../../styles/Section_1.module.css";

const Section_1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Services</h1>
        <p className={styles.description}>
          Explore our range of professional services designed to help you
          succeed. From web development and UI/UX design to digital strategy and
          support, we deliver tailored solutions that drive results for your
          business.
        </p>
        <div
          className={styles.rectangle}
          style={{
            backgroundImage:
              'url("https://webonlinestudio.com/img/slider/Web-Development-Services-.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "#fff", // optional: for better text contrast on image
          }}
        ></div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <p className={styles.featureTitle}>Web Development</p>
            <p className={styles.featureText}>
              Custom websites and applications built with the latest
              technologies.
            </p>
          </div>
          <div className={styles.feature}>
            <p className={styles.featureTitle}>UI/UX Design</p>
            <p className={styles.featureText}>
              Engaging and user-friendly interfaces that enhance user
              experience.
            </p>
          </div>
          <div className={styles.feature}>
            <p className={styles.featureTitle}>Digital Strategy</p>
            <p className={styles.featureText}>
              Strategic planning and consulting to grow your digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_1;
