
import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Zap,
  Lock,
  Shield,
  ArrowRight,
} from "lucide-react";
import ProfileImage from "../assets/Profile.png";
import AboutImage from "../assets/About.png";

// Animated Reveal Effect Component
const AnimatedReveal = ({ imageSrc, containerStyle, isAboutImage = false, isProfileImage = false }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={animatedStyles.imageContainer}>
        <img
          src={imageSrc}
          alt={isAboutImage ? "Profile Art" : isProfileImage ? "Profile" : "Vector illustration"}
          style={{
            ...animatedStyles.aboutImage,
            opacity: (isAboutImage || isProfileImage) ? (isRevealed ? 1 : 0) : 1,
            transition: (isAboutImage || isProfileImage) ? "opacity 3s ease-in-out" : "none",
          }}
        />
        <div
          style={{
            ...animatedStyles.scratchOverlay,
            clipPath: isRevealed
              ? "polygon(0 0, 0 0, 0 100%, 0 100%)"
              : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

// Home Component (Original Portfolio Content)
const Home = ({ styles }) => {
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
        "sepoila Test Network",
      ],
      link: "https://github.com/AadityaMishra794/SIH-Astrominds--Frontend",
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description:
        "Full-featured NFT marketplace with minting, trading, and royalty management on multiple chains.",
      tech: ["React.js", "Ethereum", "sepolia test netwrk"],
      link: "https://github.com/AadityaMishra794/Smart-contract-projects",
    },
    {
      id: 3,
      title: "Fund hive",
      description:
        "Decentralized Crowdfunding Platform in which you anyone can create campaign for fund raising and anyone can donate",
      tech: ["Solidity", "react", "truffle", "sepolia test network network"],
      link: "https://crowdfundhive.netlify.app/",
    },
    // {
    //   id: 4,
    //   title: "Cross-Chain Bridge",
    //   description:
    //     "Secure asset bridge connecting Ethereum, Binance Smart Chain, and Polygon networks.",
    //   tech: ["Solidity", "Node.js", "Web3", "Chainlink"],
    //   link: "https://github.com/AadityaMishra794/polygonscan-clone-frontend-REACT.JS-",
    // },
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
  }, [typewriterText, typewriterIndex, isDeleting, currentTextIndex, texts]);

  return (
    <>
      {/* Hero Section */}
      <div style={styles.hero} className="hero">
        <div style={styles.textSection} className="text-section">
          <h1 style={styles.heroHeading}>
            BUILDING THE <br /> <span style={styles.futurespan}>FUTURE </span>OF{" "}
            <br /> BLOCKCHAIN
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
          <AnimatedReveal
            imageSrc={ProfileImage}
            containerStyle={styles.profileImageContainer}
            isProfileImage={true}
          />
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
      {/* <section id="testimonials" style={styles.section} className="section">
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
      </section> */}
    </>
  );
};

// About Page Component
const AboutPage = ({ styles }) => {
  const [contentVisible, setContentVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const [greetingText, setGreetingText] = useState("");
  const [greetingComplete, setGreetingComplete] = useState(false);

  const skillData = [
    { title: "Blockchain Dev", percentage: 80, icon: Zap },
    { title: "Smart Contracts", percentage: 95, icon: Shield },
    { title: "Security Learning", percentage: 70, icon: Lock },
  ];

  const fullGreeting = "Hi, I am Aaditya Mishra";

  useEffect(() => {
    const timer1 = setTimeout(() => setContentVisible(true), 300);
    const timer2 = setTimeout(() => setSkillsAnimated(true), 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Typewriter effect for greeting
  useEffect(() => {
    if (greetingText.length < fullGreeting.length) {
      const timeout = setTimeout(() => {
        setGreetingText(fullGreeting.slice(0, greetingText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setGreetingComplete(true);
    }
  }, [greetingText]);

  const SkillBar = ({ title, percentage, icon: Icon }) => (
    <div style={aboutStyles.skillBarContainer}>
      <div style={aboutStyles.skillHeader}>
        <div style={aboutStyles.skillTitle}>
          <Icon size={16} style={aboutStyles.skillIcon} />
          {title}
        </div>
        <span style={aboutStyles.skillPercentage}>{percentage}%</span>
      </div>
      <div style={aboutStyles.progressBarBackground}>
        <div
          style={{
            ...aboutStyles.progressBarFill,
            width: skillsAnimated ? `${percentage}%` : "0%",
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <>
      {/* About Section */}
      <section style={aboutStyles.aboutSection} className="about-section">
        {/* LEFT SIDE: Interactive Image */}
        <div style={aboutStyles.aboutLeft} className="about-left">
          <div style={aboutStyles.imageWithGreeting}>
            <AnimatedReveal
              imageSrc={AboutImage}
              containerStyle={aboutStyles.scratchContainer}
              isAboutImage={true}
            />
            <div style={aboutStyles.greetingContainer} className="greeting-container">
              <h2 style={aboutStyles.greetingText}>
                {greetingText}
                {!greetingComplete && <span style={aboutStyles.cursor}>|</span>}
              </h2>
            </div>
             <div style={aboutStyles.skillSection}>
            {skillData.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          </div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div
          style={{
            ...aboutStyles.aboutRight,
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
          className="about-right"
        >
          <h2 style={aboutStyles.aboutHeading}>ABOUT ME</h2>
          <p style={aboutStyles.aboutSubHeading}>
            Blockchain Developer | Web3 Innovator | Security Learner
          </p>

          <p style={aboutStyles.aboutText}>
            I am a passionate blockchain developer creating innovative solutions
            that thrive in the decentralized world. From DeFi to NFTs, I build
            the future using cutting-edge technologies like Rust and
            zero-knowledge proofs. I focus on{" "}
            <strong>security, efficiency, and scale</strong> to deliver robust
            decentralized applications.
          </p>

          {/* Badges */}
          <div style={aboutStyles.badgeContainer}>
            <span style={aboutStyles.badge} className="pulse-badge">
              Smart Contract Expert
            </span>
            <span style={aboutStyles.badge} className="pulse-badge">
              Auditing 
            </span>
            <span style={aboutStyles.badge} className="pulse-badge">
              Foundry Testing
            </span>
            <span style={aboutStyles.badge} className="pulse-badge">
              Ethereum
            </span>
            <span style={aboutStyles.badge} className="pulse-badge">
              Solidity
            </span>
            <span style={aboutStyles.badge} className="pulse-badge">
              ERC20
            </span>
            <span style={aboutStyles.badge} className="pulse-badge">
              ZK Proofs
            </span>
            <span style={aboutStyles.badge} className="pulse-badge">
              NFT
            </span>
            <span style={aboutStyles.badge} className="pulse-badge">
              Wallets
            </span>
            

          </div>

          {/* Skill Bars */}
         
        </div>
      </section>

      {/* HIRE ME SECTION - FULL WIDTH */}
      <div style={aboutStyles.hireMeSection} className="hire-me-section">
        <h2 style={aboutStyles.hireMeHeading} className="hire-me-heading">
          Why You Should Hire Me
        </h2>

        <p style={aboutStyles.hireMeText} className="hire-me-text">
          I am a dedicated blockchain developer who thrives on creating secure
          and efficient decentralized solutions. My experience with smart
          contracts, Rust, and zero-knowledge proofs allows me to tackle complex
          problems while keeping scalability and security in focus. I constantly
          strive to learn and implement innovative technologies that can make a
          meaningful impact.
        </p>

        <p style={aboutStyles.hireMeText} className="hire-me-text">
          Beyond technical expertise, I bring creativity, adaptability, and a
          collaborative mindset to every project. I take ownership of my work
          and aim to exceed expectations. By hiring me, you gain a developer who
          is passionate, results-driven, and committed to building robust,
          future-ready blockchain applications.
        </p>
      </div>
    </>
  );
};

// Main Portfolio Router Component
const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === "about") {
        setCurrentPage("about");
      } else {
        setCurrentPage("home");
      }
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Initial check
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (page) => {
    setMobileMenuOpen(false);
    if (page === "about") {
      window.location.hash = "#about";
    } else if (page === "home") {
      window.location.hash = "#home";
    } else {
      // For services and projects, scroll to section on home page
      if (currentPage !== "home") {
        window.location.hash = "#home";
        setTimeout(() => {
          document.getElementById(page)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(page)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div style={styles.body}>
      <style>
        {`
          @keyframes moveArrow {
            from { transform: translateX(-5px); }
            to { transform: translateX(5px); }
          }
          
          @keyframes pulse {
            0%, 100% { 
              box-shadow: 0 0 5px rgba(255, 26, 26, 0.5);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 0 20px rgba(255, 26, 26, 0.8);
              transform: scale(1.05);
            }
          }
          
          .pulse-badge:hover {
            animation: pulse 1s ease-in-out;
            background: rgba(255, 26, 26, 0.3) !important;
          }
          
          @keyframes scratchReveal {
            0% { 
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
            }
            25% {
              clip-path: polygon(0 0, 75% 0, 85% 100%, 0 100%);
            }
            50% {
              clip-path: polygon(0 0, 50% 0, 60% 100%, 0 100%);
            }
            75% {
              clip-path: polygon(0 0, 25% 0, 35% 100%, 0 100%);
            }
            100% { 
              clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); 
            }
          }
          
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          
          /* Tablet and smaller desktop */
          @media (max-width: 1200px) {
            .hero { 
              padding: 6rem 3rem !important;
              paddingTop: 9rem !important;
            }
            .section { 
              padding: 4rem 3rem !important; 
            }
            .about-section { 
              padding: 6rem 3rem 4rem 3rem !important;
            }
            .hire-me-section {
              padding: 3.5rem 3rem !important;
            }
            .hire-me-heading {
              font-size: 2.8rem !important;
            }
          }
          
          @media (max-width: 1024px) {
            .about-section { 
              flex-direction: column !important;
              gap: 3rem !important;
              padding: 8rem 3rem 5rem 3rem !important;
            }
            .about-left, .about-right { 
              max-width: 100% !important;
              flex: none !important;
            }
            .about-left {
              order: 1;
              margin-bottom: 2rem;
              margin-top: 2rem !important;
            }
            .greeting-container {
              margin-top: 1.5rem !important;
            }
            .greeting-container h2 {
              font-size: 1.8rem !important;
            }
            .about-right {
              order: 2;
            }
            .hire-me-section {
              padding: 3rem 2.5rem !important;
            }
            .hire-me-heading {
              font-size: 2.6rem !important;
            }
          }
          
          @media (max-width: 768px) {
            .hero { 
              flex-direction: column !important; 
              text-align: center !important; 
              padding: 8rem 2rem 4rem !important; 
            }
            .text-section { 
              max-width: 100% !important; 
              margin-bottom: 2rem !important; 
            }
            .hero-image { max-width: 80% !important; }
            .hero h1 { font-size: 2.5rem !important; }
            .hero p { font-size: 0.9rem !important; }
            .navbar { padding: 1rem !important; }
            .logo { font-size: 1.4rem !important; }
            .nav-links { display: none !important; }
            .mobile-menu-button { display: block !important; }
            .social-sidebar { display: none !important; }
            .section { padding: 3rem 2rem !important; }
            .services-grid { grid-template-columns: 1fr !important; }
            .projects-grid { grid-template-columns: 1fr !important; }
            .testimonial-grid { grid-template-columns: 1fr !important; }
            
            .about-section { 
              padding: 6rem 2rem 4rem 2rem !important; 
              gap: 2rem !important;
            }
            .about-left {
              margin-bottom: 1.5rem;
              margin-top: 3rem !important;
            }
            .greeting-container {
              margin-top: 1.2rem !important;
            }
            .greeting-container h2 {
              font-size: 1.5rem !important;
            }
            .about-heading {
              font-size: 2.5rem !important;
            }
            .about-sub-heading {
              font-size: 1rem !important;
            }
            .badge-container {
              justify-content: center;
              gap: 0.5rem !important;
            }
            .hire-me-section {
              padding: 3rem 2rem !important;
              margin-top: 3rem !important;
            }
            .hire-me-heading {
              font-size: 2.4rem !important;
            }
            .hire-me-text {
              font-size: 1.05rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .hero h1 { font-size: 2rem !important; }
            .section { padding: 2rem 1rem !important; }
            .logo { font-size: 1.2rem !important; }
            .navbar { padding: 0.8rem !important; }
            
            .about-section { 
              padding: 5rem 1rem 3rem 1rem !important;
            }
            .about-left {
              margin-top: 4rem !important;
            }
            .greeting-container {
              margin-top: 1rem !important;
            }
            .greeting-container h2 {
              font-size: 1.3rem !important;
            }
            .about-heading {
              font-size: 2rem !important;
            }
            .about-sub-heading {
              font-size: 0.9rem !important;
            }
            .about-text {
              font-size: 0.9rem !important;
            }
            .hire-me-section {
              padding: 3rem 1rem !important;
            }
            .hire-me-heading {
              font-size: 2.2rem !important;
            }
            .hire-me-text {
              font-size: 1rem !important;
            }
          }
          
          @media (max-width: 360px) {
            .hero h1 { font-size: 1.8rem !important; }
            .hero p { font-size: 0.85rem !important; }
            .section { padding: 1.5rem 0.8rem !important; }
            .navbar { padding: 0.6rem !important; }
            .logo { font-size: 1.1rem !important; }
            
            .about-section { 
              padding: 4rem 0.8rem 2.5rem 0.8rem !important;
            }
            .about-left {
              margin-top: 5rem !important;
            }
            .greeting-container {
              margin-top: 0.8rem !important;
              padding: 0 0.5rem !important;
            }
            .greeting-container h2 {
              font-size: 1.1rem !important;
            }
            .about-heading {
              font-size: 1.8rem !important;
            }
            .about-sub-heading {
              font-size: 0.85rem !important;
            }
            .about-text {
              font-size: 0.85rem !important;
            }
            .hire-me-section {
              padding: 2.5rem 0.8rem !important;
              margin-top: 2rem !important;
            }
            .hire-me-heading {
              font-size: 2rem !important;
            }
            .hire-me-text {
              font-size: 0.95rem !important;
            }
          }
          
          @media (min-width: 1200px) {
            .container {
              maxWidth: "1200px",
            }
            .hero {
              padding: "8rem 5rem" !important;
              paddingTop: "12rem" !important;
            }
            .section {
              padding: "6rem 5rem" !important;
            }
            .about-section {
              padding: "8rem 5rem 6rem 5rem" !important;
            }
            .hire-me-section {
              padding: "5rem 6rem" !important;
            }
          }
          
          @media (min-width: 1400px) {
            .hero {
              padding: "10rem 6rem" !important;
              paddingTop: "14rem" !important;
            }
            .section {
              padding: "7rem 6rem" !important;
            }
            .about-section {
              padding: "10rem 6rem 8rem 6rem" !important;
            }
            .hire-me-section {
              padding: "6rem 8rem" !important;
            }
          }
          
          .mobile-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            z-index: 9;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            border-bottom: 1px solid rgba(255, 26, 26, 0.3);
          }
          
          .mobile-menu.open {
            transform: translateX(0);
          }
          
          .mobile-menu-button {
            display: none;
            background: none;
            border: none;
            color: #fff;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 4px;
            transition: color 0.3s ease;
          }
          
          .mobile-menu-button:hover {
            color: #ff1a1a;
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
          <a href="#home" onClick={() => handleNavClick("home")}>
            <h1 style={styles.logo}>
              Ether<span style={styles.logoSpan}>Braider</span>
            </h1>
          </a>

          <ul style={styles.navLinks} className="nav-links">
            <li>
              <a
                href="#services"
                style={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("services");
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                style={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                style={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("about");
                }}
              >
                About
              </a>
            </li>
          </ul>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </nav>
{/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul style={{ listStyle: 'none', padding: '2rem', margin: 0 }}>
            <li style={{ marginBottom: '1rem' }}>
              <a href="#services" style={styles.navLink} onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>
                Services
              </a>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <a href="#projects" style={styles.navLink} onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" style={styles.navLink} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Conditional Rendering Based on Current Page */}
        {currentPage === 'home' ? <Home styles={styles} /> : <AboutPage styles={styles} />}
      </div>
    </div>
  );
};

// Styles for Animated Reveal Effect
const animatedStyles = {
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    overflow: "hidden",
  },
  aboutImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    borderRadius: "10px",
  },
  scratchOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(255, 26, 26, 0.1) 50%, rgba(0, 0, 0, 0.9) 100%)",
    backdropFilter: "blur(2px)",
    transition: "clip-path 3s ease-in-out",
    animation: "scratchReveal 3s ease-in-out forwards",
    zIndex: 2,
  },
};

// About Page Specific Styles
const aboutStyles = {
  aboutSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "2rem 4rem 5rem 4rem",
    width: "100%",
    boxSizing: "border-box",
    gap: "4rem",
    minHeight: "calc(100vh - 80px)",
    flexWrap: "wrap", // responsive
  },
  aboutLeft: {
    flex: 1,
    maxWidth: "45%",
    minHeight: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // aligns image to top of container
    position: "relative",
    marginTop:"6rem",
  },
  aboutRight: {
    flex: 1,
    maxWidth: "55%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // aligns text from top
  },
  scratchContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    aspectRatio: "1 / 1",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "-6rem", // image aligned slightly up
  },
  aboutHeading: {
    fontSize: "3rem",
    fontWeight: 800,
    color: "#ff1a1a",
    marginBottom: "1rem",
    fontFamily: "'Orbitron', sans-serif",
  },
  aboutSubHeading: {
    fontSize: "1.2rem",
    color: "#aaa",
    marginBottom: "2rem",
    fontWeight: 300,
  },
  aboutText: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#ccc",
    marginBottom: "3rem",
  },
  badgeContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: "2rem",
  },
  badge: {
    background: "rgba(255, 26, 26, 0.1)",
    color: "#ff1a1a",
    border: "1px solid #ff1a1a",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "bold",
    textShadow: "0 0 5px rgba(255, 26, 26, 0.5)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  skillSection: {
    marginTop:"2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  skillBarContainer: {
    width: "100%",
    maxWidth: "400px",
  },
  skillHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "5px",
  },
  skillTitle: {
    color: "#fff",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  skillIcon: {
    marginRight: "8px",
    color: "#ff1a1a",
  },
  skillPercentage: {
    color: "#ff1a1a",
    fontWeight: "bold",
  },
  progressBarBackground: {
    height: "6px",
    background: "rgba(50, 50, 50, 0.8)",
    borderRadius: "3px",
    marginTop: "5px",
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    background: "linear-gradient(90deg, #ff1a1a, #ff6d6d)",
    transition: "width 2s ease-out",
    boxShadow: "0 0 10px #ff1a1a",
  },

  // ---------------- HIRE ME SECTION ----------------
  hireMeSection: {
    width: "100%",
    marginTop: "4rem",
    padding: "4rem",
    background: "linear-gradient(135deg, rgba(255, 26, 26, 0.08) 0%, rgba(0, 0, 0, 0.95) 100%)",
    borderRadius: "20px",
    boxSizing: "border-box",
    textAlign: "center",
    border: "2px solid rgba(255, 26, 26, 0.2)",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(255, 26, 26, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  },
  hireMeHeading: {
    fontSize: "3rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #ff1a1a 0%, #ff6d6d 50%, #ffffff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "2rem",
    fontFamily: "'Orbitron', sans-serif",
    textShadow: "0 0 30px rgba(255, 26, 26, 0.5)",
    position: "relative",
  },
  hireMeText: {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "#e0e0e0",
    marginBottom: "2rem",
    maxWidth: "800px",
    margin: "0 auto 2rem auto",
    fontWeight: 300,
    letterSpacing: "0.3px",
    position: "relative",
    zIndex: 2,
  },
  // Responsive classes for hire me section
  hireMeResponsive: {
    "@media (max-width: 768px)": {
      padding: "3rem 2rem",
      marginTop: "3rem",
    },
    "@media (max-width: 480px)": {
      padding: "2.5rem 1rem",
      marginTop: "2rem",
    },
    "@media (max-width: 360px)": {
      padding: "2rem 0.8rem",
      marginTop: "1.5rem",
    },
  },
};

  // Hire Me Section Styles


// Main Portfolio Styles
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
  profileImageContainer: {
    position: "relative",
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    background: "linear-gradient(135deg, rgba(31, 31, 31, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%)",
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
