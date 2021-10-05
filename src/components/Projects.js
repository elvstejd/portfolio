import { SectionTitle } from "../styles/shared/SectionTitle";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import project1Image from '../images/pftcalc-screencap.png';
import project2Image from '../images/timetask-screencap.png';

const projects = [
    {
        name: "TimeTask",
        description: "Lorem ipsum dolor sit amet is the beggining of the most common lorem ipsum text which is a placeholder in design compositions.",
        image: project1Image,
        github: "https://github.com/elvstejd/timetask",
        live: "https://timetask.netlify.app/"
    },
    {
        name: "Crypto Profit Calculator",
        description: "Lorem ipsum dolor sit amet is the beggining of the most common lorem ipsum text which is a placeholder in design compositions.",
        image: project2Image,
        github: "",
        live: ""
    },
];

const ProjectsGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 2rem;
`;


function Projects() {
    return (
        <div>
            <SectionTitle><span>/</span>projects</SectionTitle>
            <ProjectsGridContainer>
                {projects.map(({ name, description, image, github, live }) => (
                    <ProjectCard
                        key={name}
                        name={name}
                        description={description}
                        image={image}
                        github={github}
                        live={live}
                    />
                ))}
            </ProjectsGridContainer>
        </div>
    )
}

export default Projects;
