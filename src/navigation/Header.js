// react
import { useEffect } from "react";

// mui
import { AppBar, Button, Toolbar } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Header(props) {
  const scrollY = props.scrollY

  return (
      <AppBar>
        <Toolbar>
          <Button href="/" color="inherit">
            <DarkModeIcon />
            &nbsp;Home
          </Button>
        </Toolbar>
      </AppBar>
  );
}

export default Header;
