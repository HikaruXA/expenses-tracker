import React from "react";
import InfoCard from "../../../components/InfoCard";
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
        <div
          className={styles.rectangle}
          style={{
            backgroundImage:
              'url("https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2024/03/01115727/Best-About-Us-Page-Examples-1024x528.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "#fff", // optional: for better text contrast on image
          }}
        ></div>
        <div className={styles.grid3x2}>
          <InfoCard
            title="Innovation"
            description="We thrive on creativity and new ideas."
            onClick={() => setSelectedFeature("innovation")}
          />
          <InfoCard
            title="Teamwork"
            description="Collaboration is at the core of everything we do."
            onClick={() => setSelectedFeature("teamwork")}
          />
          <InfoCard
            title="Impact"
            description="We aim to make a meaningful difference."
            onClick={() => setSelectedFeature("impact")}
          />
        </div>
      </div>
    </section>
  );
};

export default Section_1;
