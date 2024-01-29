// mui
import { createTheme } from "@mui/material/styles";

// mui light palette
const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ddd",
    },
  },
})

// mui dark palette
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
})

// export mui theme
export const muiTheme = {"light": lightTheme, "dark": darkTheme}
