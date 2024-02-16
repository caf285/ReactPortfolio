// react
import { useContext, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <Routes basename={basename}>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/books" element={<BooksPage />} />
          <Route exact path="/typography" element={<TypographyPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  )
};
