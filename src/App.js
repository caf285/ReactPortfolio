// react
import { useCallback, useEffect, useState } from "react";

// mui
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Paper, Toolbar } from "@mui/material";

// mui theme variables
import { muiTheme } from "./Theme.js";

// navigation components
import Header from './navigation/Header.js';
import Body from './navigation/Body.js';
import Footer from './navigation/Footer.js';

function App() {
  // toggle theme
  const [themeMode, setThemeMode] = useState(localStorage.getItem("mode") ? localStorage.getItem("mode") : "dark")

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", themeMode)
    localStorage.setItem("mode", themeMode)
  }, [themeMode])

  const handleThemeChange = useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light" : "dark")
  }, [themeMode])

  // set dynamic basename for links and routing
  const basename = window.location.hostname === "caf285.github.io" ? "/ReactPortfolio" : "";

  return (
    <ThemeProvider theme={muiTheme[themeMode]}>
      <CssBaseline />
      <Header
        basename={basename}
        themeMode={themeMode}
        handleThemeChange={handleThemeChange}
      />
      <div style={{ display: "flex", flexFlow: "column", alignItems: "center", minHeight: "100vh" }} >
        <Toolbar />
        <Paper elevation={1} square={false} sx={{ width: "90%", maxWidth: "1500px", flexGrow: 1, margin: 3, padding: 2 }}>
          <Body
            basename={basename}
          />
        </Paper>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
