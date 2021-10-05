import { SectionTitle } from "../styles/shared/SectionTitle";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        name: "TimeTask",
        description: "Lorem ipsum dolor sit amet is the beggining of the most common lorem ipsum text which is a placeholder in design compositions.",
        imageUrl: "http://localhost:3001/timetask-screencap.png",
        githubLink: "link",
        liveSiteLink: "link2"
    },
    {
        name: "Crypto Profit Calculator",
        description: "Lorem ipsum dolor sit amet is the beggining of the most common lorem ipsum text which is a placeholder in design compositions.",
        imageUrl: "http://localhost:3001/pftcalc-screencap.png",
        githubLink: "link",
        liveSiteLink: "link2"
    },

];


function Projects() {
    return (
        <div>
            <SectionTitle><span>/</span>projects</SectionTitle>
            {projects.map(({ name, description, imageUrl, githubLink, liveSiteLink }) => (
                <ProjectCard
                    name={name}
                    description={description}
                    imageUrl={imageUrl}
                    githubLink={githubLink}
                    liveSiteLink={liveSiteLink}
                />
            ))}
        </div>
    )
}

export default Projects;
