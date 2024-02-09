// react
import { createContext, useCallback, useEffect, useState } from "react";

// mui
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Paper, Toolbar } from "@mui/material";

// mui theme variables
import { muiTheme } from "./Theme.js";

// navigation components
import MainAppBar from './navigation/MainAppBar.js';
import Body from './navigation/Body.js';
import Footer from './navigation/Footer.js';

// create context for basename and theme swap handler
export const BasenameContext = createContext();
export const ThemeChangeContext = createContext();

export default function App() {
  // toggle theme
  const [themeMode, setThemeMode] = useState(localStorage.getItem("mode") ? localStorage.getItem("mode") : "dark")

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", themeMode)
    localStorage.setItem("mode", themeMode)
  }, [themeMode])

  const handleThemeChange = useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light" : "dark")
  }, [themeMode])

  // set dynamic basename context
  const basename = window.location.hostname === "caf285.github.io" ? "/ReactPortfolio" : "";

  return (
    <ThemeProvider theme={muiTheme[themeMode]}>
      <CssBaseline />
      <BasenameContext.Provider value={{ basename }}>
        <ThemeChangeContext.Provider value={{ handleThemeChange, themeMode }}>
          <MainAppBar />
        </ThemeChangeContext.Provider>
        <div style={{ display: "flex", flexFlow: "column", alignItems: "center", minHeight: "100vh" }} >
          <Toolbar />
          <Paper sx={{ width: "90%", maxWidth: "1500px", flexGrow: 1, margin: 3, padding: 2 }}>
            <Body />
          </Paper>
          <Footer />
        </div>
      </BasenameContext.Provider>
    </ThemeProvider>
  )
};
