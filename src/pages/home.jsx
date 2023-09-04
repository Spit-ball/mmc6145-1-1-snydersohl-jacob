import React from "react";
import styles from "../styles/home.module.css";
import Header from "../components/header";
import Project from "../components/project";

export default function Home() {
  return (
    <main>
      <Header />
      <h1 className={styles.title}>
        {/* I don't know if this is the most optimal way to do this but I wanted to try something cool with CSS */}
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>W</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>e</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>l</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>c</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>o</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>m</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>e</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}> </span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>t</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>o</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}> </span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>S</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>p</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>i</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>t</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>b</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>a</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>l</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>l</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}> </span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>S</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>t</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>u</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>d</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>i</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>o</span>
        <span className={`neon-flicker ${styles["neon-flicker"]}`}>s</span>
      </h1>
      <Project />
    </main>
  );
}
