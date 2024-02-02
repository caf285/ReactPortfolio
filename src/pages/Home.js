// react
import { useState, useEffect } from "react";

// mui
import { styled } from "@mui/system";
import { Chip } from "@mui/material";

export default function HomePage() {

  // set warningMessage session data
  const [showWarning, setShowWarning] = useState(sessionStorage.getItem("showWarning") ? sessionStorage.getItem("showWarning"): "");

  useEffect(() => {
    sessionStorage.setItem("showWarning", showWarning)
  }, [showWarning])

  return (
    <div style={{ textAlign: "center" }}>
      <Chip
        label = "Disclaimer: This site is intended as a practice and is very much a work in progress."
        color = "warning"
        sx = {{ display: showWarning }}
        onDelete = {() => {setShowWarning("none")}}
      />
    </div>
  )
}
