import 'styled-components';
import { theme, ITheme } from "../theme";

type CustomTheme = ITheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}