// mui
import { createTheme } from "@mui/material/styles";

// mui default theme
const defaultTheme = createTheme({
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 4,
      },
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
