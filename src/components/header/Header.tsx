import { motion } from "framer-motion";
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
      <motion.h1 animate={{ x: 100 }}>Animatrix</motion.h1>
    </Container>
  );
};

export default Header;
