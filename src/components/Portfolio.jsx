

import React, { useState, useEffect } from "react";
import Profile from "../assets/profile.png";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Portfolio = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "Blockchain Developer",
    "Smart Contract Expert",
    "DeFi Innovator",
    "Web3 Builder",
  ];

  const services = [
    {
      title: "Smart Contract Development",
      description:
        "Secure and efficient smart contracts built on Ethereum, Solana and ICP.",
      icon: "⚡",
    },
    {
      title: "DApp Solutions",
      description:
        "Fully functional decentralized applications tailored to your needs.",
      icon: "🔗",
    },
    {
      title: "smart contract auditor",
      description:
        "testing , auditing and making the contract less vulnerable.",
      icon: "🔐",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "AuctionVault",
      description:
        "A Decentralised Auction Platform , Real time bidding with Customised platform ABT Tokens.",
      tech: [
        "Solidity",
        "React",
        "Web3.js",
        "IPFS",
        "ABT (ERC20) Token",
        "sepoila Test Network ",
      ],
      link: "https://github.com/AadityaMishra794/SIH-Astrominds--Frontend",
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description:
        "Full-featured NFT marketplace with minting, trading, and royalty management on multiple chains.",
      tech: ["React.js", "Ethereum", "sepolia test netwrk "],
      link: "https://github.com/AadityaMishra794/Smart-contract-projects",
    },
    {
      id: 3,
      title: "Fund hive",
      description:
        "Decentralized Crowdfunding Platform in which you anyone can create campaing for fund raising and anyone can donate",
      tech: ["Solidity", "react", "truffle", "sepolia test network network"],
      link: "https://lnkd.in/dHHiQn63",
    },
    {
      id: 4,
      title: "Cross-Chain Bridge",
      description:
        "Secure asset bridge connecting Ethereum, Binance Smart Chain, and Polygon networks.",
      tech: ["Solidity", "Node.js", "Web3", "Chainlink"],
      link: "https://github.com/AadityaMishra794/polygonscan-clone-frontend-REACT.JS-",
    },
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      role: "CEO, Web3 Labs",
      feedback:
        "Working with Aaditya was a game-changer. His expertise in blockchain and smart contracts is unmatched!",
    },
    {
      name: "Raj Mehta",
      role: "Founder, CryptoCraft",
      feedback:
        "He delivered our DApp on time with flawless execution. Truly a Web3 innovator!",
    },
    {
      name: "Sophia Lee",
      role: "CTO, FinChain",
      feedback:
        "The professionalism and quality Aaditya brings are exceptional. Highly recommend for blockchain projects.",
    },
    {
      name: "Liam Smith",
      role: "Product Manager, DeFiX",
      feedback:
        "His deep understanding of DeFi protocols helped us scale our platform efficiently.",
    },
  ];

  // Typewriter Effect
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentText = texts[currentTextIndex];

        if (isDeleting) {
          setTypewriterText(currentText.substring(0, typewriterIndex - 1));
          setTypewriterIndex((prev) => prev - 1);
        } else {
          setTypewriterText(currentText.substring(0, typewriterIndex + 1));
          setTypewriterIndex((prev) => prev + 1);
        }

        if (!isDeleting && typewriterIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && typewriterIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typewriterText, typewriterIndex, isDeleting, currentTextIndex]);

  return (
    <div style={styles.body}>
      <style>
         {`
          @media (max-width: 768px) {
            .hero { flex-direction: column !important; text-align: center !important; padding: 8rem 2rem 4rem !important; }
            .text-section { max-width: 100% !important; margin-bottom: 2rem !important; }
            .hero-image { max-width: 80% !important; }
            .hero h1 { font-size: 2.5rem !important; }
            .hero p { font-size: 0.9rem !important; }
            .navbar { padding: 1rem !important; }
            .social-sidebar { display: none !important; }
            .section { padding: 3rem 2rem !important; }
            .services-grid { grid-template-columns: 1fr !important; }
            .projects-grid { grid-template-columns: 1fr !important; }
            .testimonial-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 480px) {
            .hero h1 { font-size: 2rem !important; }
            .section { padding: 2rem 1rem !important; }
          }
        `}
      </style>
      <div style={styles.container}>
        {/* Social Sidebar */}
        <div style={styles.socialSidebar} className="social-sidebar">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:etherbraider@gmail.com"
            style={styles.socialLink}
          >
            <Mail size={20} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://x.com/AadiM794"
            style={styles.socialLink}
          >
            <Twitter size={20} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AadityaMishra794"
            style={styles.socialLink}
          >
            <Github size={20} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/aaditya-mishra-5b6b2b255/"
            style={styles.socialLink}
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Navbar */}
        <nav style={styles.navbar} className="navbar">
          <h1 style={styles.logo}>
            Ether<span style={styles.logoSpan}>Braider</span>
          </h1>
          <ul style={styles.navLinks}>
            <li>
              <a href="#services" style={styles.navLink}>
                Services
              </a>
            </li>
            <li>
              <a href="#projects" style={styles.navLink}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" style={styles.navLink}>
                About
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div style={styles.hero} className="hero">
          <div style={styles.textSection} className="text-section">
           
            <h1 style={styles.heroHeading}>
              BUILDING THE <br />{" "}
              <span style={styles.futurespan}>FUTURE </span>OF <br /> BLOCKCHAIN
            </h1>
            <p style={styles.heroText}>
              A passionate blockchain developer creating <br />
              innovative solutions that help businesses <br />
              thrive in the decentralized world. From DeFi <br />
              to NFTs, I build the future of Web3.
            </p>
            <p style={styles.glowText}>
              {typewriterText}
              <span style={{ color: "#ff1a1a" }}>|</span>
            </p>
            <button
              style={styles.heroButton}
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              EXPLORE MY WORK
            </button>
          </div>

          <div style={styles.heroImage} className="hero-image">
            <img src={Profile} alt="Vector illustration" style={styles.image} />
          </div>
        </div>

        {/* Services Section */}
        <section id="services" style={styles.section} className="section">
          <h2 style={styles.sectionHeading}>Services</h2>
          <div style={styles.servicesGrid} className="services-grid">
            {services.map((service, index) => (
              <div key={index} style={styles.serviceCard}>
                <span style={styles.serviceIcon}>{service.icon}</span>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={styles.section} className="section">
          <h2 style={styles.sectionHeading}>Projects</h2>
          <div style={styles.projectsGrid} className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} style={styles.projectCard}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.techStack}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <button style={styles.projectButton}>Visit</button>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" style={styles.section} className="section">
          <h2 style={styles.sectionHeading}>Testimonials</h2>
          <div style={styles.testimonialGrid} className="testimonial-grid">
            {testimonials.map((t, index) => (
              <div key={index} style={styles.testimonialCard}>
                <p style={styles.testimonialFeedback}>"{t.feedback}"</p>
                <h4 style={styles.testimonialName}>{t.name}</h4>
                <p style={styles.testimonialRole}>{t.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Styles
const styles = {
  body: {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    background: "#1a1a1a",
    fontFamily: "'orbitron', sans-serif",
    color: "white",
  },
  container: {
    maxWidth: "calc(100% - 50px)",
    margin: "0 auto",
    background: "#000",
    minHeight: "100vh",
    overflow: "hidden",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.2rem 3rem",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(6px)",
    borderBottom: "1px solid rgba(255, 0, 0, 0.2)",
    zIndex: 10,
    fontFamily: "'Orbitron'",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: 800,
    color: "#ff1a1a",
  },
  logoSpan: {
    color: "white",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "0.9rem",
    letterSpacing: "1px",
    transition: "color 0.3s ease",
    fontFamily: "'orbitron', sans-serif",
  },
  socialSidebar: {
    position: "fixed",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "2rem 1rem",
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(10px)",
    borderRight: "1px solid rgba(255, 26, 26, 0.3)",
    zIndex: 100,
    borderRadius: "0 15px 15px 0",
  },
  socialLink: {
    color: "#ccc",
    textDecoration: "none",
    padding: "0.5rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    border: "1px solid transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "6rem 4rem",
    paddingTop: "10rem",
    width: "100%",
    boxSizing: "border-box",
  },
  textSection: {
    flex: 1,
    maxWidth: "55%",
  },
  futurespan: {
    color: "rgba(255, 255, 255, 1)",
  },
  heroHeading: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "3.5rem",
    fontWeight: 800,
    color: "#ff1a1a",
    lineHeight: 1.2,
    marginBottom: "2rem",
  },
  heroText: {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#ccc",
    marginBottom: "2rem",
  },
  heroButton: {
    background: "white",
    color: "black",
    padding: "0.9rem 2rem",
    border: "white",
    borderRadius: "9999px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s ease-in-out",
  },
  glowText: {
    fontSize: "1.5rem",
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: "bold",
    color: "#ff1a1a",
    textShadow: "0 0 10px #ff1a1a, 0 0 20px #ff1a1a, 0 0 30px #ff1a1a",
    marginBottom: "1.5rem",
  },
  heroImage: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "45%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    maxWidth: "100%",
  },
  section: {
    padding: "5rem 4rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  sectionHeading: {
    fontSize: "2rem",
    color: "#ff1a1a",
    marginBottom: "2rem",
    fontFamily: "'Orbitron', sans-serif",
  },
  sectionText: {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#ff1a1a",
    marginBottom: "1.5rem",
    fontFamily: "'Orbitron', sans-serif",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  serviceCard: {
    background:
      "linear-gradient(135deg, rgba(31, 31, 31, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%)",
    padding: "32px",
    borderRadius: "16px",
    border: "1px solid rgba(220, 38, 38, 0.2)",
    transition: "all 0.3s ease",
  },
  serviceIcon: {
    fontSize: "40px",
    marginBottom: "12px",
    display: "block",
  },
  serviceTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#fff",
  },
  serviceDescription: {
    color: "#ccc",
    lineHeight: 1.6,
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  projectCard: {
    background: "rgba(31, 31, 31, 0.9)",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid rgba(220, 38, 38, 0.2)",
    transition: "all 0.3s ease",
  },
  projectTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#dc2626",
  },
  projectDescription: {
    color: "#ccc",
    marginBottom: "16px",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "16px",
  },
  techTag: {
    background: "black",
    color: "#fe1a19",
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  projectButton: {
    background: "white",
    color: "black",
    padding: "0.6rem 1.2rem",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  testimonialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  testimonialCard: {
    background: "rgba(31, 31, 31, 0.9)",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid rgba(220, 38, 38, 0.2)",
    textAlign: "center",
  },
  testimonialFeedback: {
    color: "#ccc",
    fontStyle: "italic",
    marginBottom: "12px",
  },
  testimonialName: {
    color: "#ff1a1a",
    fontWeight: "bold",
    marginBottom: "4px",
  },
  testimonialRole: {
    color: "#999",
    fontSize: "0.9rem",
  },
};

export default Portfolio;
