// react
import { useState, useCallback, useEffect, useRef } from "react";

// mui
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Paper, Toolbar } from "@mui/material";

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

  // extended header on `scrollY = 0`
  const [scrollY, setScrollY] = useState(0)
  const scrollRef = useRef()

  useEffect(() => {
    setScrollY(window.scrollY)
  }, [])

  return (
    <ThemeProvider theme={muiTheme[themeMode]}>
      <CssBaseline />
      <Header
        scrollY={scrollY}
        themeMode={themeMode}
        handleThemeChange={handleThemeChange}
      />
      <div style={{ display: "flex", flexFlow: "column", alignItems: "center", minHeight: "100vh" }} onScroll={() => {console.log(scrollRef.current.scrollTop); setScrollY(scrollRef.current.scrollTop)}} ref={scrollRef}>
        <Toolbar />
        <Paper elevation={10} square={false} sx={{ width: "90%", maxWidth: "1500px", flexGrow: 1, margin: 3, padding: 2 }}>
          <Body />
        </Paper>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
