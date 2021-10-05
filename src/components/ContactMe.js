import styled from "styled-components";
import { Button } from "../styles/shared/Button";

const Spacing = styled.div`
    padding-top: 5rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
`;

function ContactMe() {
    return (
        <Spacing>
            <Button>Contact me</Button>
        </Spacing>
    )
}

export default ContactMe;
