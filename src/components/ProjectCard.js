import styled from "styled-components";
import { CardContainer } from "../styles/shared/CardContainer";
import { UilFolder, UilGithubAlt, UilExternalLinkAlt } from '@iconscout/react-unicons';

const ProjectContainer = styled(CardContainer)`
    margin-bottom: 2rem;
`;

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

const ExternalLink = styled.a`
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
    line-height: 1.3rem;
    font-size: var(--text-md);
    padding: 1.4rem 1rem;
`;


function ProjectCard({ name, description, imageUrl, githubLink, liveSiteLink }) {
    return (
        <ProjectContainer>
            <ProjectTopBar>
                <ProjectName>
                    <UilFolder />
                    <span>{name}</span>
                </ProjectName>
                <ExternalButtonsContainer>
                    <ExternalLink href={githubLink}>
                        <UilGithubAlt />
                    </ExternalLink>
                    <ExternalLink href={liveSiteLink}>
                        <UilExternalLinkAlt />
                    </ExternalLink>
                </ExternalButtonsContainer>
            </ProjectTopBar>
            <Image src={imageUrl} alt="hi" />
            <ProjectDescription>
                {description}
            </ProjectDescription>
        </ProjectContainer>
    )
}

export default ProjectCard;
