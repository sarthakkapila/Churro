import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      customShadow1: string;
      customShadow2: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      customShadow1?: string;
      customShadow2?: string;
    };
  }
}

const theme = createTheme({
  custom: {
    customShadow1:
      "drop-shadow(0px 0px 10px #f6d535) drop-shadow(0px 0px 16px #f6d535) drop-shadow(0px 0px 40px rgba(255, 74, 169, 0.8))",
    customShadow2:
      "drop-shadow(0px 8px 28px rgba(255, 74, 169, 0.2)) drop-shadow(0px 18px 88px rgba(255, 74, 169, 0.3))",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#f6d535",
      light: "#f6d535",
      contrastText: "#f6d535",
    },
    secondary: {
      main: "#f6d535",
      light: "#f6d535",
    },
    text: {
      primary: "#f6d535",
      secondary: "#f6d535",
    },
    background: {
      default: "#000000",
      paper: "rgba(32,27,53,.6)",
    },
  },
  typography: {
    fontFamily: ["Pixel Operator Mono", "monospace"].join(","),
    body2: {
      fontSize: 14,
      letterSpacing: "1px",
    },
    body1: {
      fontSize: 18,
    },
    h4: {
      fontWeight: "bold",
      fontSize: 28,
      letterSpacing: "1.5px",
    },
    h3: {
      fontWeight: "bold",
      fontSize: 32,
      letterSpacing: "1.5px",
    },
    h2: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 32,
      fontWeight: 700,
      // letterSpacing: "0.5px",
    },
  },
});

export default theme;
