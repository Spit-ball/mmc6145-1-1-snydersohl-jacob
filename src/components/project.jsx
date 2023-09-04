import React from "react";
import styles from "../styles/project.module.css";

const projects = [
  {
    title: "Project 1: Just Spitballin'!",
    description:
      "This is my attempt at recreating a rudimentary version of Reddit.",
    link: "https://spitballing-9a4898a0e20b.herokuapp.com/",
  },
  {
    title: "Project 2: Authentication/Authorization",
    description:
      "This is the second project that incorporates authentication and authorization into a simple music ecommerce site",
    link: "https://jawsdb-bcrypt-7f86e1f28c5c.herokuapp.com/",
  },
];

export default function Project() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.leftSection}></div>
      <div className={styles.middleSection}>
        <h1 className={styles.projectTitle}>My Projects</h1>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectNum}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.linkBtn}>
              {project.link && (
                <a
                  className={styles.projectLink}
                  href={project.link}
                  target="_blank"
                >
                  View this project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.rightSection}></div>
    </div>
  );
}
