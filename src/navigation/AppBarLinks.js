// react
import { useContext, useCallback, useRef, useState } from "react";

// mui
import { Button, IconButton, Link, Menu, MenuItem, Tooltip } from "@mui/material";
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from "@mui/icons-material";

// context
import { BasenameContext, ThemeChangeContext } from "../App.js";

export function Home() {
  // get basename context
  const basename = useContext(BasenameContext);

  return (
    <Button href={`${basename}/`} color="inherit">
      Home
    </Button>
  );
};

export function GithubRepo(props) {
  return (
    <Tooltip placement={props.placement} title="https://github.com/caf285/ReactPortfolio">
      <Button href="https://github.com/caf285/ReactPortfolio" color="inherit">
        GitHub Repo
      </Button>
    </Tooltip>
  );
};

export function ThemeToggle(props) {
  // get handleThemeChange context
  const { handleThemeChange, themeMode } = useContext(ThemeChangeContext)

  return (
    <Tooltip placement={props.placement} title="toggle theme">
      <IconButton onClick={handleThemeChange} color="inherit">
        {themeMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

/* Demo Menu Items */
export function DemoTypography(props) {
  // get basename context
  const basename = useContext(BasenameContext);

  return (
    <Link href={`${basename}/typography`}>
      <MenuItem onClick={props.onClick}>Typography</MenuItem>
    </Link>
  )
}

export function DemoMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button disableRipple={false} onClick={handleClick}>
        Demo
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <DemoTypography
          onClick={handleClose}
        />
      </Menu>
    </>
  );
};
