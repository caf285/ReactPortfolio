// react
import { Fragment, useCallback, useEffect, useState } from "react";

// mui
import { AppBar, Drawer, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { MenuOpen as MenuOpenIcon } from "@mui/icons-material";

// app bar components
import LargeAppBar from "./LargeAppBar.js";
import SmallAppBar from "./SmallAppBar.js";

export default function MainAppBar(props) {
  // set initial window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth)
  };

  const scrollHandler = () => {
    //console.log(window.scrollY)
  };

  // add event listeners on load
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [])

  // handle drawer state
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawer = useCallback((open) => () => {
    setDrawerOpen(open)
  }, [])

  return (
    <AppBar sx={{ opacity: 0.9 }}>
      <Toolbar>
        <Typography variant="overline" sx={{ fontSize: "1rem", flexGrow: 1 }}>
          React Portfolio Project
        </Typography>
        {windowWidth && windowWidth >= 600 ? (
          /* if screen size larger than 600px */
          <LargeAppBar />
        ) : (
          /* if screen size smaller than 600px */
          <Fragment>
            <Tooltip title="toggle menu">
              <IconButton onClick={handleDrawer(true)} color="inherit">
                <MenuOpenIcon />
              </IconButton>
            </Tooltip>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawer(false)} onClick={handleDrawer(false)}>
              <SmallAppBar />
            </Drawer>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};
