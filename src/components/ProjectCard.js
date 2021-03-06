import styled from "styled-components";
import { CardContainer } from "../styles/shared/CardContainer";
import { UilFolder, UilGithubAlt, UilExternalLinkAlt } from '@iconscout/react-unicons';


const ProjectTopBar = styled.div`
    background-color: var(--primary-300);
    display: flex;
    justify-content: space-between;
    padding: .4rem .9rem;
`;

const ProjectName = styled.div`
    color: var(--secondary-500);
    font-size: var(--text-xs);
    display: flex;
    align-items: center;
    font-weight: 600;
    span {
        margin-left: .5rem;
    }
    svg {
        width: 1rem;
        height: 1rem;
        color: var(--accent-500);
    }
`;

const ExternalButtonsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ExternalLink = styled.a.attrs({ target: '_blank' })`
    margin-left: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color:inherit;
    svg {
        width: 1.3rem;
        height: 1.3rem;
    }

    transition: color .2s ease;

    &:hover {
        color: var(--secondary-500);
    }
`;

const Image = styled.img`
    max-height: 12rem;
    width: 100%;
    object-fit: cover;
    margin: auto;
`;

const ProjectDescription = styled.p`
    color: var(--secondary-600);
    font-family: var(--font-family-sans);
    font-weight: 500;
    line-height: 1.3;
    font-size: var(--text-md);
    padding: 1.4rem 1rem;

    skill {
        color: var(--accent-500);
        font-family: var(--font-family-mono);
    }
`;


function ProjectCard({ name, description, image, github, live }) {
    return (
        <CardContainer>
            <ProjectTopBar>
                <ProjectName>
                    <UilFolder />
                    <span>{name}</span>
                </ProjectName>
                <ExternalButtonsContainer>
                    {github && (
                        <ExternalLink href={github}>
                            <UilGithubAlt />
                        </ExternalLink>
                    )}
                    {live && (
                        <ExternalLink href={live}>
                            <UilExternalLinkAlt />
                        </ExternalLink>
                    )}
                </ExternalButtonsContainer>
            </ProjectTopBar>
            <Image src={image} alt="hi" />
            {/* Improper use of the innerHTML can open me up to a cross-site scripting (XSS) attack */}
            <ProjectDescription dangerouslySetInnerHTML={{ __html: description }} />
        </CardContainer>
    )
}

export default ProjectCard;
