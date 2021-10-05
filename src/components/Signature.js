import styled from 'styled-components';

const Container = styled.div`
    margin-top: 5rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;
`;

const Link = styled.a`
    font-size: var(--text-sm);
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
            <Link href="https://github.com/elvstejd/portfolio" target="_blank"><span>Designed + Built By <span>Elvis Tejeda</span></span></Link>
        </Container>
    )
}

export default Signature;
