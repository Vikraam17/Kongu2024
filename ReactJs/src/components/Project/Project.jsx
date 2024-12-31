import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Project Management Dashboard",
      description: "Built a real-time project management dashboard using React, Node.js, and MongoDB. Features include task tracking, team collaboration, and analytics.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"]
    },
    {
      title: "E-commerce Platform",
      description: "Developed a full-stack e-commerce platform with features like product catalog, cart management, and secure payment integration.",
      tech: ["React", "Express", "PostgreSQL", "Stripe"]
    },
    {
      title: "AI Chat Application",
      description: "Created a real-time chat application with AI-powered features including sentiment analysis and automatic translation.",
      tech: ["React", "Python", "TensorFlow", "WebSocket"]
    }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <div className="nav-content">
          <div className="logo">Vikraam</div>
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}></div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="title">Hi, I'm Vikraam</h1>
          <p className="subtitle">Software Developer | Problem Solver | Tech Enthusiast</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-primary">Contact Me</a>
            <a href="#projects" className="cta-secondary">View Projects</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="skills">
            <h3>Technical Skills</h3>
            <div className="skill-categories">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Database</h4>
                <ul>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Redis</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="social-links">
            <a href="https://github.com/Vikraam17" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="mailto:vikraam17@gmail.com" className="social-link">Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Vikraam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;