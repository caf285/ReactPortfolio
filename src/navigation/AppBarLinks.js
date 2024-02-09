// react
import { useContext } from "react";

// mui
import { Button, IconButton, Tooltip } from "@mui/material";
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
  // unload props
  const placement = props.placement

  return (
    <Tooltip placement={placement} title="https://github.com/caf285/ReactPortfolio">
      <Button href="https://github.com/caf285/ReactPortfolio" color="inherit">
        GitHub Repo
      </Button>
    </Tooltip>
  );
};

export function ThemeToggle(props) {
  // unload props
  const placement = props.placement

  // get handleThemeChange context
  const { handleThemeChange, themeMode } = useContext(ThemeChangeContext)

  return (
    <Tooltip placement={placement} title="toggle theme">
      <IconButton onClick={handleThemeChange} color="inherit">
        {themeMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};
