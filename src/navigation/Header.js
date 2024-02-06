// react
import { Fragment, useCallback, useEffect, useState } from "react";

// mui
import { AppBar, Button, Divider, Drawer, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon, MenuOpen as MenuOpenIcon } from "@mui/icons-material";

function Header(props) {
  // unload props
  const basename = props.basename;
  const themeMode = props.themeMode;
  const handleThemeChange = props.handleThemeChange;

  // set initial window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // add event listeners on load
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    });
    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
    });
  }, [])

  // handle drawer state
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawer = useCallback((open) => () => {
    setDrawerOpen(open)
  }, [])

  return (
    <AppBar sx={{ opacity: 0.9 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          React Portfolio Project
        </Typography>
        {windowWidth && windowWidth >= 600 ? (
          /* if screen size larger than 600px */
          <Fragment>
            <Button href={`${basename}/`} color="inherit">
              Home
            </Button>
            <Divider orientation="vertical" sx={{ margin: 2 }} flexItem />
            <Tooltip title="https://github.com/caf285/ReactPortfolio">
              <Button href="https://github.com/caf285/ReactPortfolio" color="inherit">
                GitHub Repo
              </Button>
            </Tooltip>
            <Divider orientation="vertical" sx={{ margin: 2 }} flexItem />
            <Tooltip title="toggle theme">
              <IconButton onClick={handleThemeChange} color="inherit">
                {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
          </Fragment>
        ) : (
          /* if screen size smaller than 600px */
          <Fragment>
            <Tooltip title="toggle menu">
              <IconButton onClick={handleDrawer(true)} color="inherit">
                <MenuOpenIcon />
              </IconButton>
            </Tooltip>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawer(false)} onClick={handleDrawer(false)}>
              <Button href={`${basename}/`} color="inherit">
                Home
              </Button>
              <Tooltip placement="left" title="https://github.com/caf285/ReactPortfolio">
                <Button href="https://github.com/caf285/ReactPortfolio" color="inherit">
                  GitHub Repo
                </Button>
              </Tooltip>
              <Tooltip placement="left" title="toggle theme">
                <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <IconButton onClick={handleThemeChange} color="inherit">
                  {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
                </div>
              </Tooltip>
            </Drawer>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
