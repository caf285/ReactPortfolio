// react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// mui
import { Toolbar } from "@mui/material";

// page components
import HomePage from "../pages/Home.js";
import NoPage from "../pages/NoPage.js";

function Body() {
  return (
    <div>
      <Toolbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Body;
