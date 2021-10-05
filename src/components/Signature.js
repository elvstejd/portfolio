import styled from 'styled-components';

const Container = styled.div`
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;
`;

const P = styled.p`
    font-size: var(--text-md);
    color: var(--secondary-600);
    width: 60%;
    text-align: center;
    cursor: pointer;
    transition: color .2s ease;

    &:hover {
        color: var(--secondary-500);
    }

    span {
        display: inline-block;
    }
`;

function Signature() {
    return (
        <Container>
            <P>Designed + Built By <span>Elvis Tejeda</span></P>
        </Container>
    )
}

export default Signature;
