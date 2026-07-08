import SectionTitle from "../../common/SectionTitle";
import Button from "../../common/Button";
import { experience } from "../../data/experience";

function ExperiencePreview() {
  return (
    <section className="experience-preview">
      <div className="container">

        <SectionTitle
          title="My Journey"
          description="A few milestones from my learning journey."
        />

        <div className="timeline">

          {experience.slice(0, 4).map(item => (
            <article
              className="timeline-item"
              key={item.year + item.title}
            >
              <h3>{item.year}</h3>

              <h4>{item.title}</h4>

              <p>{item.description}</p>
            </article>
          ))}

        </div>

        <Button to="/experience">
          View Timeline
        </Button>

      </div>
    </section>
  );
}

export default ExperiencePreview;