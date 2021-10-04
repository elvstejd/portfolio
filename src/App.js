import styled from 'styled-components';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Skills from './components/Skills';

const Main = styled.main`
  padding: 2rem;
`;

function App() {
  return (
    <Main>
      <Introduction />
      <Skills />
      <Projects />
    </Main>
  );
}

export default App;
