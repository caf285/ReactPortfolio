// link components
import * as Links from "./AppBarLinks.js";

export default function SmallAppBar() {
  return (
    <>
      <Links.Home />
      <Links.GithubRepo
        placement={"left"}
      />
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <Links.ThemeToggle
          placement={"left"}
        />
      </div>
    </>
  );
};
