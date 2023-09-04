import React from "react";
import styles from "../styles/about.module.css";
import Header from "../components/header";

export default function About() {
  return (
    <main>
      <Header />
      <div className={styles.aboutContainer}>
        <div className={styles.leftSection}>
          <img src="/about.jpg" alt="It's me!" className={styles.aboutImage} />
        </div>
        <div className={styles.middleSection}>
          <div className={styles.verticalBar}></div>
        </div>
        <div className={styles.rightSection}>
          <h1 className={styles.aboutTitle}>About Spitball</h1>
          <p className={styles["body-copy"]}>
            Driven by the belief that work is an integral part of life, I
            approach my professional journey with passion, creativity, and a
            dedication to making each day fulfilling. I subscribe to the notion
            that when you're doing what you love, it's not work; it's living.
            With a diverse background in journalism, education, and web
            development, I've embraced this philosophy by constantly seeking new
            opportunities to learn, grow, and create.
          </p>

          <p className={styles["body-copy"]}>
            Beyond my professional pursuits, I'm an avid photographer, tabletop
            game enthusiast, and a music aficionado. These interests provide
            both balance and inspiration, with photography serving as a canvas
            for self-expression and a professional outlet for published work.
            Through my experiences in journalism and my contributions to various
            media agencies, I've honed my skills in crafting compelling
            narratives. Welcome to my portfolio, where you'll discover the
            intersection of my diverse experiences, my passion for web
            development, and a glimpse into the vibrant world that surrounds it.
          </p>
        </div>
      </div>
    </main>
  );
}
