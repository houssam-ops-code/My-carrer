import SectionTitle from "../../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import Button from "../../common/Button";

function FeaturedProjects() {
  const featuredProjects = projects.filter(
    project => project.featured
  );

  return (
    <section className="featured-projects">
      <div className="container">

        <SectionTitle
          title="Featured Projects"
          description="A selection of projects that best represent my work."
        />

        <div className="projects-grid">

          {featuredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

        <Button to="/projects">
          View All Projects
        </Button>

      </div>
    </section>
  );
}

export default FeaturedProjects;