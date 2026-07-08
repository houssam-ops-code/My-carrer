import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function HeroSection() {
  useEffect(() => {
    const container = document.getElementById("globe-container");
    const svg = document.getElementById("globe-svg");
    if (!container || !svg) return;

    const svgNS = "http://www.w3.org/2000/svg";
    const cx = 150,
      cy = 150,
      R = 100;
    
    const defs = document.createElementNS(svgNS, "defs");
    const clipPath = document.createElementNS(svgNS, "clipPath");
    clipPath.setAttribute("id", "gc");
    const cc = document.createElementNS(svgNS, "circle");
    cc.setAttribute("cx", cx);
    cc.setAttribute("cy", cy);
    cc.setAttribute("r", R - 1);
    clipPath.appendChild(cc);
    defs.appendChild(clipPath);
    svg.appendChild(defs);

    const linesG = document.createElementNS(svgNS, "g");
    linesG.setAttribute("clip-path", "url(#gc)");
    svg.appendChild(linesG);

    const eq = document.createElementNS(svgNS, "ellipse");
    eq.setAttribute("cx", cx);
    eq.setAttribute("cy", cy);
    eq.setAttribute("rx", R);
    eq.setAttribute("ry", R * 0.28);
    eq.setAttribute("fill", "none");
    eq.setAttribute("stroke", strokeColor);
    eq.setAttribute("stroke-width", "0.7");
    eq.setAttribute("opacity", "0.45");
    linesG.appendChild(eq);

    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI;
      const rx = Math.max(1, Math.abs(Math.cos(a)) * R);
      const el = document.createElementNS(svgNS, "ellipse");
      el.setAttribute("cx", cx);
      el.setAttribute("cy", cy);
      el.setAttribute("rx", rx);
      el.setAttribute("ry", R);
      el.setAttribute("fill", "none");
      el.setAttribute("stroke", strokeColor);
      el.setAttribute("stroke-width", "0.7");
      el.setAttribute("opacity", "0.45");
      linesG.appendChild(el);
    }

    const outline = document.createElementNS(svgNS, "circle");
    outline.setAttribute("cx", cx);
    outline.setAttribute("cy", cy);
    outline.setAttribute("r", R);
    outline.setAttribute("fill", "none");
    outline.setAttribute("stroke", strokeColor);
    outline.setAttribute("stroke-width", "1.5");
    svg.appendChild(outline);

    const icons = Array.from({ length: 5 }, (_, i) => ({
      el: document.getElementById("icon-" + i),
      angle: (i / 5) * Math.PI * 2,
    }));

    const start = Date.now();

    function getOrbitRadii() {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      return {
        rx: w * 0.48,
        ry: h * 0.14,
        midX: w / 2,
        midY: h / 2,
      };
    }

    function animate() {
      const t = (Date.now() - start) / 1000;
      const { rx, ry, midX, midY } = getOrbitRadii();

      const computed = icons.map((icon) => {
        const angle = icon.angle + t * 0.55;
        const sinA = Math.sin(angle);
        const cosA = Math.cos(angle);
        const x = midX + cosA * rx;
        const y = midY + sinA * ry;
        const scale = 0.78 + sinA * 0.22;
        const opacity = 0.12 + ((sinA + 1) / 2) * 0.88;
        return { icon, x, y, scale, sinA, opacity };
      });

      computed.sort((a, b) => a.sinA - b.sinA);
      computed.forEach(({ icon, x, y, scale, opacity }, idx) => {
        if (icon.el) {
          icon.el.style.left = x + "px";
          icon.el.style.top = y + "px";
          icon.el.style.transform = `translate(-50%, -50%) scale(${scale})`;
          icon.el.style.opacity = opacity;
          icon.el.style.zIndex = idx;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm
            <span className="text-primary"> Houssam</span>
            .
          </h1>
          <p className="hero-body">
            I build modern web applications using React, JavaScript and PHP while constantly learning new technologies.
          </p>
          <div className="hero-actions">
            <NavLink to="/contact" className="btn btn-primary">
              Me contacter
            </NavLink>
            <NavLink to="/" className="btn btn-secondary">
              Voir plus
            </NavLink>
          </div>
        </div>
        <div className="globe" id="globe-container">
          <svg className="globe-svg" id="globe-svg" viewBox="0 0 300 300"></svg>
          <div className="globe-icon" id="icon-0">
            <span className="material-symbols-outlined">language</span>
          </div>
          <div className="globe-icon" id="icon-1">
            <span className="material-symbols-outlined">school</span>
          </div>
          <div className="globe-icon" id="icon-2">
            <span className="material-symbols-outlined">code</span>
          </div>
          <div className="globe-icon" id="icon-3">
            <span className="material-symbols-outlined">rocket_launch</span>
          </div>
          <div className="globe-icon" id="icon-4">
            <span className="material-symbols-outlined">public</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
