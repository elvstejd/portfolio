import styled from 'styled-components';
import { UilGithub, UilAt } from '@iconscout/react-unicons';
import DecoderEffect from './DecoderEffect';

const HiText = styled.div`
    margin-top: 3rem;
    font-size: var(--text-sm);
    font-weight: bold;
    color: var(--accent-500);
`;

const NameAndTitle = styled.h1`
    font-size: var(--text-xl);
    color: var(--secondary-500);
    margin-bottom: 0.6rem;
`;

const AboutMe = styled.p`
    font-family: var(--font-family-sans);
    font-weight: 500;
    font-size: var(--text-md);
    color: var(--secondary-600);
    margin-bottom: 1rem;
`;

const SocialsContainer = styled.div`
    display: flex;
    margin-bottom: 3rem;
`;

const Social = styled.div`
    display: flex;
    align-items: center;
    font-size: var(--text-sm);
    color: var(--secondary-600);
    margin-right: 1rem;
    transition: color .2s ease;
    cursor: pointer;
    span {
        margin-left: .4rem;
    }

    svg {
        width: var(--text-sm);
        width: var(--text-sm);
    }

    &:hover {
        color: var(--secondary-500);
    }
`;

function Introduction() {
    return (
        <div>
            <HiText>Hi, I'm</HiText>
            <NameAndTitle>
                <DecoderEffect>Elvis Tejeda, Software Engineer</DecoderEffect>
            </NameAndTitle>
            <AboutMe>At any given moment you can find me either learning or building apps. Always open for discussion or  collaboration. </AboutMe>
            <SocialsContainer>
                <Social>
                    <UilGithub />
                    <span>GitHub</span>
                </Social>
                <Social>
                    <UilAt />
                    <span>Email</span>
                </Social>
            </SocialsContainer>
        </div>
    )
}

export default Introduction;
