import styled from 'styled-components';

function getCSSVariableValue(varName) {
    const value = getComputedStyle(document.documentElement)
        .getPropertyValue(varName);

    return value;
}

const Button = styled.button`
    font-family: var(--font-family-mono);
    font-size: var(--text-xs);
    font-weight: 600;
    background-color: ${getCSSVariableValue('--accent-500') + '09'};
    /* background-color: rgba('80, 237, 255', .7); */
    padding: 0.9rem 1.7rem;
    color: var(--accent-500);
    border: 2px solid var(--accent-500);
    border-radius: var(--border-radius-sm);
    cursor: pointer;

    &:hover  {
        background-color: ${getCSSVariableValue('--accent-500') + '1c'};
    }

    &:active {
        background-color: ${getCSSVariableValue('--accent-500') + '1c'};
    }

    &:focus {
        background-color: ${getCSSVariableValue('--accent-500') + '1c'};
    }

`;

export { Button };
