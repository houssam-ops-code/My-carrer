import { useRef } from "react";
import Button from "../common/Button";
import { personalInfo } from "../data/personalInfo";
import useGlobeAnimation from "../data/animation";

function HeroSection() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  useGlobeAnimation(containerRef, svgRef);

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>

          <h1 className="hero-title">
            <span className="text-primary">{personalInfo.name}</span>
          </h1>

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
              language
            </span>
          </div>

          <div className="globe-icon" id="icon-1">
            <span className="material-symbols-outlined">
              school
            </span>
          </div>

          <div className="globe-icon" id="icon-2">
            <span className="material-symbols-outlined">
              code
            </span>
          </div>

          <div className="globe-icon" id="icon-3">
            <span className="material-symbols-outlined">
              rocket_launch
            </span>
          </div>

          <div className="globe-icon" id="icon-4">
            <span className="material-symbols-outlined">
              public
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;