// react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// mui
import { Paper, Toolbar } from "@mui/material";

// page components
import HomePage from "../pages/Home.js";
import NoPage from "../pages/NoPage.js";

function Body() {
  return (
    <div>
      <Toolbar />
      <Paper elevation={10} sx={{ margin: 3, padding: 2 }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Paper>
    </div>
  )
}

export default Body;
