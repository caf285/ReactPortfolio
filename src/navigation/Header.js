// react
import { useEffect } from "react";

// mui
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from "@mui/icons-material";

function Header(props) {
  const scrollY = props.scrollY;
  const themeMode = props.themeMode;
  const handleThemeChange = props.handleThemeChange;

  return (
    <AppBar sx={{ opacity: 0.9 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TooLateForTacos
        </Typography>
        <Button href="/" color="inherit">
          Home
        </Button>
        <IconButton onClick={handleThemeChange} color="inherit">
          {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
