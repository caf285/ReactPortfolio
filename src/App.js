// react
import { useState, useEffect, useRef } from "react";

// mui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Button, Paper } from "@mui/material";

// navigation components
import Header from './navigation/Header.js';
import Body from './navigation/Body.js';
import Footer from './navigation/Footer.js';

// mui themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
})
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
})

function App() {
  // toggle theme
  const [theme, setTheme] = useState(darkTheme)
  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme.palette.mode)
  }, [theme])

  // extended header on `scrollY = 0`
  const [bodyScrollY, setBodyScrollY] = useState(0)
  const bodyRef = useRef()
  useEffect(() => {
    setBodyScrollY(window.scrollY)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh", overflowY: "auto", display: "flex", flexFlow: "column" }} onScroll={() => {console.log(bodyRef.current.scrollTop); setBodyScrollY(bodyRef.current.scrollTop)}} ref={bodyRef}>
        <Header
          scrollY={bodyScrollY}
        />
        <Paper elevation={0} square={true} sx={{ flexGrow: 1 }}>
          <Body />
        </Paper>
        <Footer />
      </div>
      <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
        <Button onClick={() => {setTheme(theme.palette.mode === "dark" ? lightTheme : darkTheme)}}>
          toggle
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default App
