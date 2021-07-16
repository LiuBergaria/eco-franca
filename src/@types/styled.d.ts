import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    background: string;
    foreground: string;
  }
}
