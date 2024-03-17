// react
import { useContext } from "react";

// mui
import { Button, IconButton, Link, MenuItem, Tooltip } from "@mui/material";
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

/* drop down links */
function DropDownItem(props) {
  // get basename context
  const basename = useContext(BasenameContext);
  const label = props.label;
  const link = props.link;

  return (
    <Link href={`${basename}/${link}`}>
      <MenuItem>{label}</MenuItem>
    </Link>
  )
}

export function DemoCluster(props) {
  // unpack props
  const onClick = props.onClick;

  return (
    <span onClick={onClick}>
      <DropDownItem
        label={"Typography"}
        link={"#/demo-typography"}
      />
      <DropDownItem
        label={"Plotly"}
        link={"#/demo-plotly"}
      />
      <DropDownItem
        label={"Leaflet"}
        link={"#/demo-leaflet"}
      />
      <DropDownItem
        label={"Api"}
        link={"#/demo-api"}
      />
    </span>
  );
}
