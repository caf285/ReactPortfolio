// react
import { useEffect } from "react";

// mui
import { AppBar, Button, Divider, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from "@mui/icons-material";

function Header(props) {
  const basename = props.basename;
  const themeMode = props.themeMode;
  const handleThemeChange = props.handleThemeChange;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
    });
  }, [])

  return (
    <AppBar sx={{ opacity: 0.9 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          React Portfolio Project
        </Typography>
        <Button href={`${basename}/`} color="inherit">
          Home
        </Button>
        <Divider orientation="vertical" variant="middle" sx={{ margin: 2 }}flexItem />
        <Tooltip title="https://github.com/caf285/ReactPortfolio">
          <Button href="https://github.com/caf285/ReactPortfolio" color="inherit">
            GitHub Repo
          </Button>
        </Tooltip>
        <Divider orientation="vertical" variant="middle" sx={{ margin: 2 }}flexItem />
        <Tooltip title="toggle theme">
          <IconButton onClick={handleThemeChange} color="inherit">
            {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
