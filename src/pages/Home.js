// react
import { useState, useEffect } from "react";

// mui
import { Chip, List, ListItem, ListItemText } from "@mui/material";

export default function HomePage() {

  // set warningMessage session data
  const [showWarning, setShowWarning] = useState(sessionStorage.getItem("showWarning") ? sessionStorage.getItem("showWarning"): "");

  useEffect(() => {
    sessionStorage.setItem("showWarning", showWarning)
  }, [showWarning])

  return (
    <div style={{ margin: "auto", width: "50%" }}>
      <Chip
        label = "Disclaimer: This site is intended as a practice and is very much a work in progress."
        color = "warning"
        sx = {{ display: showWarning }}
        onDelete = {() => {setShowWarning("none")}}
      />
      <h3>
        Todo:
      </h3>
      <List>
        <ListItem>
          <ListItemText primary="jazz up todo list" />
        </ListItem>
        <ListItem>
          <ListItemText primary="replace warning container with something that can collapse to multiple lines" />
        </ListItem>
        <ListItem>
          <ListItemText primary="begin navigational components for page content" />
        </ListItem>
        <ListItem>
          <ListItemText primary="variable text size and/or new header component for smaller screens when necessary" />
        </ListItem>
        <ListItem>
          <ListItemText primary="testing" />
        </ListItem>
      </List>
    </div>
  )
}
