import React from "react";
import styles from "../styles/contact.module.css";
import Header from "../components/header";

export default function Contact() {
  return (
    <main>
      <Header />
      <div className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Get In Touch!</h1>
        <ul className={styles["contact-site-links"]}>
          <li className={styles["contact-link-item"]}>
            <div className={styles["neomorph-link"]}>
              <a href="https://www.linkedin.com/in/jacob-s-6a8843124/">
                LinkedIn
              </a>
            </div>
          </li>
          <li className={styles["contact-link-item"]}>
            <div className={styles["neomorph-link"]}>
              <a href="https://github.com/Spit-ball">GitHub</a>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
