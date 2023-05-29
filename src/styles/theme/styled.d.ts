declare module "styled-components" {
  interface DefaultTheme {
    color: {
      primary: string;
      primaryDark: string;
      secundary: string;
      dark: string;
      darkLight: string;
      light: string;
    };
    font: {
      primary: string;
    };
  }
}

export default DefaultTheme;
