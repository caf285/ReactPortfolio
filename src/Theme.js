// react
import { useEffect } from "react";

// mui
import { createTheme } from "@mui/material/styles";

// muiTheme
const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
})

function Theme(props) {
  const setTheme = props.setTheme

  useEffect(() => {
    setTheme(darkTheme)
  }, [])

  return (
    <div />
  )
}

export default Theme
