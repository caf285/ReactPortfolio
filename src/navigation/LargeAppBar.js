// react
import { useState } from "react";

// mui
import { Button, Divider, IconButton, Link, Menu, MenuItem, Tooltip } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// link components
import * as Links from "./Links.js";

function DropDownMenu(props) {
  // unpack props
  const label = props.label;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
  }

  return (
    <>
      <Button disableRipple={false} onClick={handleClick}>
        {label} <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Links.DemoCluster
          onClick={handleClose}
        />
      </Menu>
    </>
  );
}

export default function LargeAppBar() {
  return (
    <>
      <Links.Home />
      <Divider orientation="vertical" sx={{ margin: 2 }} flexItem />
      <Links.GithubRepo />
      <Divider orientation="vertical" sx={{ margin: 2 }} flexItem />
      <Links.ThemeToggle />
      <Divider orientation="vertical" sx={{ margin: 2 }} flexItem />
      <DropDownMenu
        label={"Demo"}
      />
    </>
  );
};
