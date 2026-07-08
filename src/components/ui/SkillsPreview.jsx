import SectionTitle from "../../common/SectionTitle";
import Button from "../../common/Button";
import skills from "../../data/skills";

function SkillsPreview() {
  return (
    <section className="skills-preview">
      <div className="container">

        <SectionTitle
          title="Tech Stack"
          description="Technologies I use to build modern applications."
        />

        <div className="skills-grid">

          {skills.map(group => (
            <div
              className="skill-group"
              key={group.category}
            >
              <h3>{group.category}</h3>

              <div className="skill-list">

                {group.items.map(skill => (
                  <span
                    key={skill}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>

        <Button to="/skills">
          View All Skills
        </Button>

      </div>
    </section>
  );
}

export default SkillsPreview;