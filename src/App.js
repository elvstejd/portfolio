import styled from 'styled-components';
import ContactMe from './components/ContactMe';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Signature from './components/Signature';
import Skills from './components/Skills';

const Main = styled.main`
  padding: 0 2rem;
`;

function App() {
  return (
    <Main>
      <Introduction />
      <Skills />
      <Projects />
      <ContactMe />
      <Signature />
    </Main>
  );
}

export default App;
