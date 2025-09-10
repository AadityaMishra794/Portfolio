import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Sidebar = ({ styles }) => {
  return (
    <div style={styles.sidebar}>
      <a href="mailto:youremail@example.com" style={styles.sidebarIcon}><Mail /></a>
      <a href="https://github.com/yourgithub" style={styles.sidebarIcon}><Github /></a>
      <a href="https://linkedin.com/in/yourlinkedin" style={styles.sidebarIcon}><Linkedin /></a>
      <a href="https://twitter.com/yourtwitter" style={styles.sidebarIcon}><Twitter /></a>
    </div>
  );
};

export default Sidebar;
