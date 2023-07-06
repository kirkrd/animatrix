import { motion } from "framer-motion";
import { styled, useTheme } from "styled-components";
import { FaRegLightbulb } from "react-icons/fa";
import { useContext } from "react";
import { ThemeEditorContext } from "../../App";
import { ThemeLight } from "../../themes/LightTheme";
import { ThemeDefault } from "../../themes/Theme";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: ${(p) => p.theme.application.backgroundColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.secondary};
`;

const SwitchButton = styled(motion.button)`
  background-color: ${(p) => p.theme.colors.primary};
  position: absolute;
  right: 0;
`;

const Header = () => {
  const { setTheme } = useContext(ThemeEditorContext);
  const theme = useTheme();
  return (
    <Container>
      <motion.h1 animate={{ opacity: 1 }}>Animatrix</motion.h1>
      <SwitchButton
        onClick={() =>
          setTheme(theme === ThemeLight ? ThemeDefault : ThemeLight)
        }
      >
        <FaRegLightbulb />
      </SwitchButton>
    </Container>
  );
};

export default Header;
