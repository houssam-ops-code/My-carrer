import Button from "../../common/Button";

function ProjectCard({ project }) {
  const {
    title,
    image,
    shortDescription,
    category,
    year,
    status,
    technologies,
    github,
    demo,
  } = project;

  return (
    <article className="project-card">

      <div className="project-image">
        <img
          src={image || "/images/project-placeholder.png"}
          alt={title}
        />
      </div>

      <div className="project-content">

        <div className="project-header">
          <h3>{title}</h3>

          <span className="project-status">
            {status}
          </span>
        </div>

        <div className="project-meta">
          <span>{category}</span>
          <span>•</span>
          <span>{year}</span>
        </div>

        <p className="project-description">
          {shortDescription}
        </p>

        <div className="project-technologies">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">

          {github && (
            <Button
              to={github}
              variant="secondary"
            >
              GitHub
            </Button>
          )}

          {demo && (
            <Button
              to={demo}
            >
              Live Demo
            </Button>
          )}

          <Button
            to={`/projects/${project.id}`}
          >
            Details
          </Button>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;