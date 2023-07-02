import { PropsWithChildren } from "react";
import { styled } from "styled-components";

const SectionContainer = styled.div`
  background-color: ${(p) => p.theme.colors.surface};
`;

const Section = (props: PropsWithChildren) => {
  return <SectionContainer>{props.children}</SectionContainer>;
};

export default Section;
