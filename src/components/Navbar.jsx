import React from "react";
import { styles } from "./Portfolio";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/"><h1 style={styles.logo}>
        Ether<span style={styles.logoSpan}>Braider</span>
      </h1></Link>
      <ul style={styles.navLinks}>
        <li><Link to="/services" style={styles.navLink}>Services</Link></li>
        <li><Link to="/projects" style={styles.navLink}>Projects</Link></li>
        <li><Link to="/about" style={styles.navLink}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
