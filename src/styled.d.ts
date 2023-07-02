import { DefaultTheme } from "styled-components";
import { extendableTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
