// react
import { useState, useEffect } from "react";

// mui
import { Box, Grid, IconButton, Paper, Tooltip } from "@mui/material";
import { Cancel as CancelIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

// card button components
import CardButton from "../components/cardButton/CardButton.js";

export default function HomePage() {
  // mui theme
  const theme = useTheme()

  // set warningMessage session data
  const [showWarning, setShowWarning] = useState(sessionStorage.getItem("showWarning") ? sessionStorage.getItem("showWarning"): "flex");

  useEffect(() => {
    sessionStorage.setItem("showWarning", showWarning)
  }, [showWarning])

  return (
    <div style={{margin: "auto", maxWidth: "1200px", display: "flex", flexFlow: "column" }}>

      {/* front page disclaimer */}
      <Paper sx={{ display: showWarning, flexFlow: "row", alignItems: "flex-start", margin: "auto", marginBottom: "25px", padding: "5px", backgroundColor: theme.palette.warning.main }}>
        <Box style={{ flexGrow: 1 }}>
          "Disclaimer: This site is intended as practice and is very much a work in progress. Click the 'x' to make me go away until the page is opened in another tab."
        </Box>
        <Tooltip title="close">
          <IconButton onClick={() => setShowWarning("none")}>
            <CancelIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Paper>

      {/* menu grid */}
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CardButton
              image={"/assets/images/books.jpg"}
              alt={"books"}
              title={"My Favorite Books"}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
};
