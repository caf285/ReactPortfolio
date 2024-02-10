// react
import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import { BasenameContext } from "../App.js";

// page components
import HomePage from "../pages/Home.js";
import NoPage from "../pages/NoPage.js";

export default function Body() {
  const basename = useContext(BasenameContext)

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};
