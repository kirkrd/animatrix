import { styled } from "styled-components";
import { ThemeSpacing } from "../../types/model";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  spacing?: ThemeSpacing;
};

const Container = styled.div<{ spacing: ThemeSpacing }>`
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.spacings[p.spacing]}px;
`;

const Horizontal = ({ spacing = "medium", children }: Props) => {
  return <Container spacing={spacing}>{children}</Container>;
};

export default Horizontal;
