import styled from "styled-components";
import { SectionTitle } from "../styles/shared/SectionTitle";
import { CardContainer } from "../styles/shared/CardContainer";


const SkillsContent = styled.div`
    padding: 1rem;
    ul {
        list-style-type: none;
    }

`;

const SkillsTopBar = styled.div`
    background-color: var(--primary-300);
    height: 2rem;
`;


function Skills() {
    return (
        <div>
            <SectionTitle><span>/</span>technologies</SectionTitle>
            <CardContainer>
                <SkillsTopBar />
                <SkillsContent>
                    <ul>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>HTML/CSS</li>
                        <li>MongoDB</li>
                        <li>Heroku</li>
                    </ul>
                    <ul>
                        <li>Netlify</li>
                        <li>Firebase</li>
                        <li>Express.js</li>
                        <li>Python</li>
                        <li>Git/Github</li>
                    </ul>
                </SkillsContent>
            </CardContainer>
        </div>
    )
}

export default Skills;
