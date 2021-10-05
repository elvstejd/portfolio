import styled from 'styled-components';
// import ContactMe from './components/ContactMe';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Signature from './components/Signature';
import Skills from './components/Skills';
import Header from './components/Header';

const Main = styled.main`
  padding: 0 2rem;
  max-width: 56rem;
  margin: 0 auto;

  @media (min-width: 1024px) {
      padding-top: 5rem;
    }
`;

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Introduction />
        <Skills />
        <Projects />
        {/* <ContactMe /> */}
        <Signature />
      </Main>
    </div>
  );
}

export default App;
