// react
import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import { BasenameContext } from "../App.js";

// page components
import HomePage from "../pages/Home.js";
import BooksPage from "../pages/Books.js";
import TypographyPage from "../pages/Typography.js";

// 404
import NoPage from "../pages/NoPage.js";

export default function Body() {
  const basename = useContext(BasenameContext)

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/books" element={<BooksPage />} />
          <Route exact path="/typography" element={<TypographyPage />} />
          <Route element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};
