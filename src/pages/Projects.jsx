import { projects } from "../data/projectfill";
import ProjectCard from "../components/ui/ProjectCard";

function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <h3>I have sone so many projects such as:</h3>
            
            {projects.map(project => (
                <ProjectCard 
                    key={project.id} project={project} 
                    title={project.title}
                    image={project.image}
                    desc={project.description}
                    techno={project.technologie}
                    challenges={project.challenges}
                    learn={project.whatILearned}
                    github={project.github}
                    demo={project.demo}
                    details={project.details}
                />
            ))}

            <p>SO Tech Learning</p>
            <p>Trello Dashboard</p>
            <p>Football Management System</p>
            <p>Human Body Learning</p>
            <p>GLPI Deployement</p>

        </>
    )
}
//image
//description
//technologies
//GitHub
//Live Demo (if available)
export default Projects;