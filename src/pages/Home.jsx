import HeroSection from "../organisms/HeroSection";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import Button from "../common/Button";
//import { projects } from "../data/projects";
//import { skills } from "../data/skills";
//import { experience } from "../data/experience";
//import { personnalInfo } from "../data/personnalInfo";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <HeroSection />

      <About />

      <Projects />

      <Skills />

      <Experience />

      <Contact />

      
    </>
  );
}

export default Home;
