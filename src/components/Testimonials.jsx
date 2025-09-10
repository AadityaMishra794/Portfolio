import React from "react";

const Testimonials = ({ styles, testimonials }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionHeading}>Testimonials</h2>
      <div style={styles.testimonialGrid}>
        {testimonials.map((t, index) => (
          <div key={index} style={styles.testimonialCard}>
            <p style={styles.testimonialText}>"{t.feedback}"</p>
            <h3 style={styles.testimonialAuthor}>- {t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
