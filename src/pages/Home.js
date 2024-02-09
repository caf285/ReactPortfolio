// react
import { useState, useEffect } from "react";

// mui
import { Box, IconButton, Paper, Tooltip } from "@mui/material";
import { Cancel as CancelIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export default function HomePage() {
  // mui theme
  const theme = useTheme()

  // set warningMessage session data
  const [showWarning, setShowWarning] = useState(sessionStorage.getItem("showWarning") ? sessionStorage.getItem("showWarning"): "flex");

  useEffect(() => {
    sessionStorage.setItem("showWarning", showWarning)
  }, [showWarning])

  return (
    <div style={{margin: "auto", maxWidth: "800px", display: "flex", flexFlow: "column" }}>
      <Paper sx={{ display: showWarning, flexFlow: "row", alignItems: "flex-start", margin: "auto", padding: "5px", backgroundColor: theme.palette.warning.main }}>
        <Box style={{ flexGrow: 1 }}>
          "Disclaimer: This site is intended as practice and is very much a work in progress. Click the 'x' to make me go away until the page is opened in another tab."
        </Box>
        <Tooltip title="close">
          <IconButton onClick={() => setShowWarning("none")}>
            <CancelIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Paper>
    </div>
  )
};
