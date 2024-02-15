// mui
import { Divider } from "@mui/material";

// link components
import * as Links from "./AppBarLinks.js";

export default function LargeAppBar() {
  return (
    <>
      <Links.Home />
      <Divider orientation="vertical" sx={{ margin: 2 }} flexItem />
      <Links.GithubRepo />
      <Divider orientation="vertical" sx={{ margin: 2 }} flexItem />
      <Links.ThemeToggle />
      <Divider orientation="vertical" sx={{ margin: 2 }} flexItem />
      <Links.DemoMenu />
    </>
  );
};
