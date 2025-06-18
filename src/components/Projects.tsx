import React from "react";
import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>

      <div className={styles.grid}>

        <div className={styles.card}>
          <h3>AMEN24.org</h3>
          <p>
            Volunteering as part of a faith-driven team to develop a new Christian platform that serves the Arab-speaking community with daily devotionals, Bible access, and media ministry tools.
          </p>
          <a href="https://amen24.org" target="_blank" rel="noopener noreferrer">
            Visit Site ↗
          </a>
        </div>

        <div className={styles.card}>
          <h3>MOI.gov.eg</h3>
          <p>
            Leading the development of the official website of the Egyptian Ministry of Interior. Overseeing architecture, security, and technical guidance to deliver a reliable and scalable solution.
          </p>
          <a href="https://moi.gov.eg" target="_blank" rel="noopener noreferrer">
            Visit Site ↗
          </a>
        </div>

        <div className={styles.card}>
          <h3>Confidential Police Systems</h3>
          <p>
            Participated in the development of internal systems and secure applications used across law enforcement operations. Due to security policies, details of these projects remain classified.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
