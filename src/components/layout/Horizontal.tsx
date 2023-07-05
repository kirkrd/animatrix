import { styled } from "styled-components";
import { ThemeSpacing } from "../../types/model";
import { CSSProperties, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  spacing?: ThemeSpacing | number;
  style?: CSSProperties;
};

const Container = styled.div<{ spacing: ThemeSpacing | number }>`
  display: flex;
  flex-direction: row;
  gap: ${(p) =>
    typeof p.spacing === "number" ? p.spacing : p.theme.spacings[p.spacing]}px;
`;

const Horizontal = ({ spacing = "medium", children, style }: Props) => {
  return (
    <Container style={style} spacing={spacing}>
      {children}
    </Container>
  );
};

export default Horizontal;
