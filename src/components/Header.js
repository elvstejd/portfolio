import styled from "styled-components";
import { Button } from "../styles/shared/Button";
import { UilCube } from '@iconscout/react-unicons'

const StyledHeader = styled.header`
    background-color: var(--transparent-black);
    backdrop-filter: blur(20px);
    padding: 1.1rem 3rem;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IconContainer = styled.div`
    svg {
        color: var(--secondary-500);
        width: var(--text-xl);
        height: var(--text-xl);
    }
`;

function Header() {
    return (
        <StyledHeader>
            <IconContainer><UilCube /></IconContainer>
            <Button>Contact me</Button>
        </StyledHeader>
    )
}

export default Header;
