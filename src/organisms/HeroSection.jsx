import { useRef } from "react";
import Button from "../common/Button";
import { personalInfo } from "../data/personalInfo";
import useGlobeAnimation from "../data/animation";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaReact,
    FaPhp,
    SiMysql,
    FaGitAlt,
    SiJavascript
} from "react-icons/fa";

function HeroSection() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  useGlobeAnimation(containerRef, svgRef);

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-status">
              🟢 Available for Internship
          </p>

          <h1 className="hero-title">
              Building Modern
              <br />
              Web Applications
          </h1>

          <h2 className="hero-subtitle">
              I'm <span className="text-primary">Houssam Benrbib</span>,
              a Software Engineering student passionate about creating
              clean, responsive and scalable web applications.
          </h2>

          <h2 className="hero-subtitle">
            {personalInfo.title}
          </h2>

          <p className="hero-body">
            {personalInfo.introduction}
          </p>

          <div className="hero-actions">
            <Button to="/projects">
              View Projects
            </Button>

            <Button
              to={personalInfo.cv}
              variant="secondary"
            >
              Download CV
            </Button>
            <div className="hero-social">
                <a
                    href="https://github.com/YOUR_GITHUB"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>

                <a
                    href="https://linkedin.com/in/YOUR_LINKEDIN"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                </a>

                <a href="mailto:YOUR_EMAIL">
                    <FaEnvelope />
                    <span>Email</span>
                </a>

            </div>
          </div>
        </div>

        <div
          className="globe"
          ref={containerRef}
        >
          <svg
            ref={svgRef}
            className="globe-svg"
            viewBox="0 0 300 300"
          />

          <div className="globe-icon" id="icon-0">
            <span className="material-symbols-outlined">
              <FaReact />
            </span>
          </div>

          <div className="globe-icon" id="icon-1">
            <span className="material-symbols-outlined">
              <FaPHP />
            </span>
          </div>

          <div className="globe-icon" id="icon-2">
            <span className="material-symbols-outlined">
              <SiMySQL />
            </span>
          </div>

          <div className="globe-icon" id="icon-3">
            <span className="material-symbols-outlined">
              <FaGitAlt />
            </span>
          </div>

          <div className="globe-icon" id="icon-4">
            <span className="material-symbols-outlined">
              JavaScript
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;