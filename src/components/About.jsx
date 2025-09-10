import React from "react";
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <section style={styles.section}>
      <Link to=""><h2 style={styles.sectionHeading}>About Me</h2>
      <p style={styles.sectionText}>
        I am a dedicated and ambitious 4th-year B.Tech student with a strong passion for blockchain technology.
        My expertise includes Ethereum, Solidity, and Web3, and I’ve worked on several decentralized
        applications, DeFi solutions, and smart contracts. I’m driven to contribute to the growth of the
        decentralized internet and create transparent, secure systems for users worldwide.
      </p></Link>
    </section>
  );
};

const styles = {
  section: { padding: "5rem 4rem", background: "#111", color: "#fff" },
  sectionHeading: { fontSize: "2rem", color: "#ff1a1a", marginBottom: "2rem" },
  sectionText: { fontSize: "1.2rem", lineHeight: 1.6 },
};

export default About;
