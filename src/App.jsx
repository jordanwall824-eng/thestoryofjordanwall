// src/App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";

import AboutMe from "./assets/aboutMe";
import Projects from "./assets/projects";
import Resume from "./assets/resume";
import Contact from "./assets/contact";

function App() {
  const [hideTitle, setHideTitle] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  // Hide title when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setHideTitle(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top & close mobile menu when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="webSite">
      {/* NAVBAR */}
      <header className="navBar">
        {/* Hamburger (shown only on mobile via CSS) */}
        <button
          className={`menuToggle ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="navBarNav">
          <ul className={`navLinks ${isMenuOpen ? "open" : ""}`}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Get To Know Me
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Resume
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* TITLE BAR */}
      <div className={`titleBar ${hideTitle ? "hiddenTitle" : ""}`}>
        <h1 className="h1">The Story of Jordan Wall</h1>
      </div>

      {/* PAGE CONTENT */}
      <main className="content">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;




