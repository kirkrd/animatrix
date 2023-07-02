import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(p) => p.theme.application.backgroundColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.secondary};
`;

const Header = () => {
  return (
    <Container>
      <h1>Animatrix</h1>
    </Container>
  );
};

export default Header;
