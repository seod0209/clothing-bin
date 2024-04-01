import 'styled-components';
import { ColorType, CommonFlexType } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: ColorType;
    common: CommonFlexType;
  }
}
