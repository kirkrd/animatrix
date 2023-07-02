import styled from "styled-components";
import Header from "./components/header/Header";
import Section from "./components/section/Section";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.text};
  background-color: ${(p) => p.theme.application.backgroundColor};
  gap: ${(p) => p.theme.spacings.medium}px;
`;

const AppContent = styled.div`
  height: 100vh;
  padding: 10vw 10vw;
  background-color: ${(p) => p.theme.application.backgroundColor};
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <AppContent>
        <Section>
          <h2> About </h2>
          <p>
            Animations are a vital part of frontend development, this is a
            showcase of different animated components.
          </p>
        </Section>
      </AppContent>
    </AppContainer>
  );
}

export default App;
