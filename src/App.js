// react
import { useState, useEffect, useRef } from "react";

// mui
import { Paper, ThemeProvider, createTheme } from "@mui/material/styles";
import Theme from "./Theme.js";

// navigation components
import Header from './navigation/Header.js';
import Body from './navigation/Body.js';
import Footer from './navigation/Footer.js';

// default dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
})

function App() {
  // default dark theme
  const [theme, setTheme] = useState(darkTheme)

  // extended header on `scrollY = 0`
  const [bodyScrollY, setBodyScrollY] = useState(0)
  const bodyRef = useRef()
  useEffect(() => {
    setBodyScrollY(window.scrollY)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Theme
        setTheme={setTheme}
      />
      <Header
        scrollY={bodyScrollY}
      />
      <div onScroll={() => {setBodyScrollY(bodyRef.current.scrollTop)}} ref={bodyRef}>
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
