import styled from 'styled-components';

const Button = styled.button`
    font-family: var(--font-family-mono);
    font-size: var(--text-xs);
    font-weight: 600;
    background-color: var(--accent-500-idle);
    padding: 0.8rem 1.7rem;
    color: var(--accent-500);
    border: 2px solid var(--accent-500);
    border-radius: var(--border-radius-sm);
    cursor: pointer;

    &:hover  {
        background-color: var(--accent-500-hover);
    }

    &:active {
        background-color: var(--accent-500-hover);
    }

    &:focus {
        background-color: var(--accent-500-hover);
    }

    @media (min-width: 1024px) {
        padding: 0.6rem 1.7rem;
        font-size: var(--text-xs);
    }
`;

export { Button };
