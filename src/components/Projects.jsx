
import React from "react";

const Projects = ({ styles, projects }) => {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.sectionHeading}>Projects</h2>
      <div style={styles.projectGrid}>
        {projects.map((p, index) => (
          <div key={index} style={styles.projectCard}>
            <img src={p.image} alt={p.title} style={styles.projectImage} />
            <h3 style={styles.projectTitle}>{p.title}</h3>
            <p style={styles.projectDescription}>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
