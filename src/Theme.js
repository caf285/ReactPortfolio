// mui
import { createTheme } from "@mui/material/styles";

// mui default theme
const defaultTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        color: "inherit",
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLink: {
      defaultProps: {
        color: "inherit",
        underline: "none",
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 4,
      },
    },
  },
  typography: {
    body1: {
      fontWeight: 100,
    },
    code: {
      fontFamily: "monospace",
      fontSize: ".9rem",
      fontWeight: "1000",
    },
  },
});

// mui light theme
const lightTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: "light",
    background: {
      default: "#ddd",
    },
  },
})

// mui dark theme
const darkTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: "dark",
  }
})

// export mui theme
export const muiTheme = {"light": lightTheme, "dark": darkTheme}
