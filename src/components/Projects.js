import { SectionTitle } from "../styles/shared/SectionTitle";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import project1Image from '../images/timetask-screencap.png';
import project2Image from '../images/pftcalc-screencap.png';

const projects = [
    {
        name: "TimeTask",
        description: "To-do app mixed with a timer. Made with <skill>ReactJS</skill>, <skill>Express.JS</skill> for the API and <skill>MongoDB</skill> as the database.",
        image: project1Image,
        github: "https://github.com/elvstejd/timetask",
        live: "https://timetask.netlify.app/"
    },
    {
        name: "Crypto Profit Calculator",
        description: "Simple tool to calculate your cryptocurrency investment profits. Featuring <skill>ReactJS</skill>, <skill>Express.js</skill> and <skill>Python</skill> web scraping.",
        image: project2Image,
        github: "",
        live: ""
    },
];

const ProjectsGridContainer = styled.div`
    display: grid;
    @media (min-width: 425px) {
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    }
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
