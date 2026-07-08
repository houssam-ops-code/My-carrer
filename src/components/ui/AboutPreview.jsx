import { NavLink } from "react-router-dom";
import SectionTitle from "../../common/SectionTitle";
import Button from "../../common/Button";
import personalInfo from "../../data/personalInfo";

function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container">
        <SectionTitle
          title="About Me"
          description="A quick introduction about who I am."
        />

        <p>{personalInfo.shortBio}</p>

        <Button to="/about">
          Learn More
        </Button>
      </div>
    </section>
  );
}

export default AboutPreview;