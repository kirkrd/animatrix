import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { styled } from "styled-components";

const SectionContainer = styled(motion.div)`
  background-color: ${(p) => p.theme.colors.surface};
  padding: ${(p) => p.theme.spacings.large}px;
`;

const Section = (props: PropsWithChildren) => {
  return (
    <SectionContainer
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {props.children}
    </SectionContainer>
  );
};

export default Section;
