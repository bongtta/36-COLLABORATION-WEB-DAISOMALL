import '@emotion/react';
import { ColorType } from './src/styles/theme';
import { FontType } from './src/styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorType;
    fonts: FontType;
  }
}
