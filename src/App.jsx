import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("portfolio-theme") || "dark"
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const updateActiveLink = () => {
      const scrollY = window.pageYOffset + 140;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollY >= sectionTop &&
          scrollY < sectionTop + sectionHeight
        ) {
          navLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", updateActiveLink, {
      passive: true,
    });

    updateActiveLink();

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value.trim();

    alert(
      `Thank you, ${firstName}! Your message has been sent successfully.`
    );

    form.reset();
  };

  return (
    <div className="app">

      {/* background */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      {/* navigation */}
      <header className="navbar-wrapper">
        <div className="container navbar-container">

          <div className="nav-spacer"></div>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>

            <ul className="nav-links">

              <li>
                <a
                  href="#home"
                  className="nav-link active"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="nav-actions">

              <button
                className="theme-toggle-btn"
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
              >
                {theme === "dark" ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>

              <a
                href="#contact"
                className="accent-btn nav-hire-btn"
                onClick={closeMenu}
              >
                Hire Me
              </a>

            </div>
          </nav>
        </div>
      </header>

      <main>

        {/* home */}
        <section className="section hero-section" id="home">
          <div className="container hero-grid">

            <div className="hero-content">

              <h1 className="hero-title">
                Building Simple and Responsive Digital Experiences.
              </h1>

              <p className="hero-description">
               I'm Mike Dietrich Cabrera, a third-year Front-End Developer focused on creating
                responsive websites and user-friendly interfaces using
                clean code, modern design, and simple user experiences.
              </p>

            </div>

            <div className="hero-visual">

              <div className="image-wrapper">
                <img
                  src="/profile.jpg"
                  alt="Portfolio"
                  className="single-image"
                />
              </div>

            </div>
          </div>
        </section>

        {/* about */}
        <section className="section about-section" id="about">

          <div className="container">

            <div className="section-header">

              <h2 className="section-title">
                Background & Experience
              </h2>

            </div>

            <div className="about-grid">

              <div className="about-visual">

                <div className="image-wrapper about-image-wrapper">

                  <img
                    src="/about.png"
                    alt="Workspace"
                    className="single-image"
                  />
                </div>
              </div>

              <div className="about-content">

                <div className="info-card">

                  <h3 className="card-subtitle">
                    Biography & Passion
                  </h3>

                  <p className="about-text">
                    I enjoy combining design and technology to create
                    websites that are simple, responsive, and easy to use.
                    As a third-year Front-End Developer, I focus on
                    building clean layouts, organized code, and smooth
                    user experiences while continuously improving my
                    skills in modern web development.
                  </p>
                </div>

                <div className="info-card">

                  <h3 className="card-subtitle">
                    Education
                  </h3>

                  <div className="education-item">

                    <div className="education-header">

                      <h4 className="education-degree">
                        Bachelor of Science in Information Technology
                      </h4>

                      <span className="education-year">
                        2024 - present
                      </span>
                    </div>

                    <p className="education-school">
                      Western Institute of Technology
                    </p>

                    <p className="education-details">
                      As a front-end developer student, I am focused on
                      learning web development, UI/UX design, programming,
                      databases, and modern web technologies while building
                      responsive and user-friendly websites.
                    </p>
                  </div>
                </div>

                <div className="stats-grid">

                  <div className="stat-card">

                    <span className="stat-number">
                      2
                    </span>

                    <span className="stat-label">
                      Years Experience
                    </span>

                  </div>

                  <div className="stat-card">

                    <span className="stat-number">
                      2
                    </span>

                    <span className="stat-label">
                      Projects Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skills */}
        <section className="section skills-section" id="skills">

          <div className="container">

            <div className="section-header center">

              <h2 className="section-title">
                Technologies & Tech Stack
              </h2>

              <p className="section-subtitle">
                Technologies and tools I use to build modern websites.
              </p>

            </div>

            <div className="skills-grid">

              {/* react */}
              <div className="skill-card-box">

                <div className="skill-card-header">

                  <div className="skill-icon-badge">

                    <svg
                      width="28"
                      height="28"
                      viewBox="-11.5 -10.23174 23 20.46348"
                    >
                      <circle
                        cx="0"
                        cy="0"
                        r="2.05"
                        fill="#00d8ff"
                      />

                      <g
                        stroke="#00d8ff"
                        strokeWidth="1"
                        fill="none"
                      >
                        <ellipse rx="11" ry="4.2" />
                        <ellipse
                          rx="11"
                          ry="4.2"
                          transform="rotate(60)"
                        />
                        <ellipse
                          rx="11"
                          ry="4.2"
                          transform="rotate(120)"
                        />
                      </g>
                    </svg>

                  </div>

                  <h3 className="skill-title">
                    React
                  </h3>

                </div>

                <SkillBar percentage="50%" />

              </div>

              {/* vite */}
              <div className="skill-card-box">

                <div className="skill-card-header">

                  <div className="skill-icon-badge">

                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#BD34FE"
                        d="M29.5 5.5L16.8 28.2a1 1 0 01-1.7 0L2.5 5.5a1 1 0 01.9-1.5h25.2a1 1 0 01.9 1.5z"
                      />

                      <path
                        fill="#FFD62E"
                        d="M19.2 3.5l-9.8 14h6.5l-2.4 8.5 11.2-15.5h-6.7l2.2-7z"
                      />
                    </svg>

                  </div>

                  <h3 className="skill-title">
                    Vite
                  </h3>

                </div>

                <SkillBar percentage="60%" />

              </div>

              {/* javascript */}
              <div className="skill-card-box">

                <div className="skill-card-header">

                  <div className="skill-icon-badge js-badge">
                    <span className="js-badge-text">
                      JS
                    </span>
                  </div>

                  <h3 className="skill-title">
                    JavaScript
                  </h3>
                </div>

                <SkillBar percentage="65%" />
              </div>

              {/* tailwind */}
              <div className="skill-card-box">

                <div className="skill-card-header">

                  <div className="skill-icon-badge">

                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="#38BDF8"
                    >
                      <path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12 4.8z" />
                    </svg>
                  </div>

                  <h3 className="skill-title">
                    Tailwind CSS
                  </h3>
                </div>

                <SkillBar percentage="55%" />

              </div>

              {/* mongodb */}
              <div className="skill-card-box">

                <div className="skill-card-header">

                  <div className="skill-icon-badge">

                    <svg
                      width="24"
                      height="28"
                      viewBox="0 0 24 28"
                    >
                      <path
                        d="M12 0C11 3 7.7 7 7.7 13.2c0 6.3 4.3 10.7 4.3 14.8.4-3.6 4.3-8.5 4.3-14.8C16.3 7 12.6 1.6 12 0z"
                        fill="#00ED64"
                      />
                    </svg>
                  </div>

                  <h3 className="skill-title">
                    MongoDB
                  </h3>
                </div>

                <SkillBar percentage="55%" />
              </div>
            </div>
          </div>
        </section>

        {/* projects */}
        <section className="section projects-section" id="projects">

          <div className="container">

            <div className="section-header">

              <h2 className="section-title">
                Selected Projects
              </h2>
            </div>

            <div className="projects-grid">

              <div className="project-container">

                <div className="project-media">

                  <img
                    src="/awesome todos.jpg"
                    alt="Awesome Todos"
                    className="project-image"
                  />
                </div>

                <div className="project-body">

                  <h3 className="project-title">
                    Awesome Todos
                  </h3>

                  <p className="project-description">
                    A task management application with a clean interface,
                    reliable data storage, and a simple client-server
                    structure.
                  </p>

                  
                </div>
              </div>

              <div className="project-container">

                <div className="project-media">

                  <img
                    src="/letsgo.png"
                    alt="LetsGo"
                    className="project-image"
                  />
                </div>

                <div className="project-body">

                  <h3 className="project-title">
                    LetsGo
                  </h3>

                  <p className="project-description">
                    A travel planning design that helps people discover
                    and organize their dream destinations.
                  </p>

                  <a
                    href="https://www.figma.com/design/BZBrT1mz1qnNmV2bs9eoQO/Let-s-GO?node-id=243-640&t=evY3oR7YkhxSBHMz-1"
                    target="_blank"
                    rel="noreferrer"
                    className="project-source-link"
                  >
                    View Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* contact */}
        <section className="section contact-section" id="contact">

          <div className="container contact-container">

            <div className="section-header center">

              <h2 className="section-title">
                Start a Conversation
              </h2>

              <p className="section-subtitle">
                Have a project in mind or looking to hire?
                Send me a message.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">

                  <label className="form-label">
                    Name
                  </label>

                  <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    required
                  />

                </div>

                <div className="form-group">

                  <label className="form-label">
                    Last Name
                  </label>

                  <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="form-row">

                <div className="form-group">

                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="cabrera@gmail.com"
                    required
                  />
                </div>

                <div className="form-group">

                  <label className="form-label">
                    Phone Number
                  </label>

                  <input
                    name="phone"
                    type="tel"
                    className="form-control"
                    placeholder="09145628107"
                    required
                  />

                </div>
              </div>

              <div className="form-group">

                <label className="form-label">
                  Your Message
                </label>

                <textarea
                  name="message"
                  className="form-control textarea"
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>

              </div>

              <div className="form-action">

                <button
                  type="submit"
                  className="accent-btn submit-btn"
                >
                  Send Message

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line
                      x1="22"
                      y1="2"
                      x2="11"
                      y2="13"
                    />

                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </section>

      </main>

      {/* footer */}
      <footer className="footer">

        <div className="container footer-content">

          <p className="copyright">
            © 2026 Mike Dietrich Cabrera. All rights reserved.
          </p>

          <a
            href="#home"
            className="back-to-top"
          >
            Back to Top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}


/* Skill Bar Component */
function SkillBar({ percentage }) {

  const className =
    percentage === "50%"
      ? "fill-react"
      : percentage === "60%"
      ? "fill-vite"
      : percentage === "65%"
      ? "fill-javascript"
      : percentage === "55%"
      ? "fill-tailwind"
      : "fill-mongodb";

  return (
    <>
      <div className="skill-prof-row">

        <span className="skill-prof-label">
          Proficiency
        </span>

        <span className="skill-prof-number">
          {percentage}
        </span>

      </div>

      <div className="skill-bar-track">

        <div
          className={`skill-bar-fill ${className}`}
          style={{ width: percentage }}
        ></div>
      </div>

      <div className="skill-bottom-accent">
        <div className="skill-bottom-dash"></div>
      </div>
    </>
  );
}

export default App;