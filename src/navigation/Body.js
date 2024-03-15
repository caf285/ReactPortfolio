// react
import { useContext, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// context
import { BasenameContext } from "../App.js";

// page components
import HomePage from "../pages/Home.js";
import FavoriteBooksPage from "../pages/FavoriteBooks.js";
import FavoriteGamesPage from "../pages/FavoriteGames.js";
import FavoriteMoviesPage from "../pages/FavoriteMovies.js";
import FavoriteThingsPage from "../pages/FavoriteThings.js";
import DemoTypographyPage from "../pages/DemoTypography.js";
import DemoPlotlyPage from "../pages/DemoPlotly.js";

// 404
import NoPage from "../pages/NoPage.js";

export default function Body() {
  const basename = useContext(BasenameContext)

  return (
    <div>
      <Router>
        <Routes basename={basename}>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/favorite-books" element={<FavoriteBooksPage />} />
          <Route exact path="/favorite-games" element={<FavoriteGamesPage />} />
          <Route exact path="/favorite-movies" element={<FavoriteMoviesPage />} />
          <Route exact path="/favorite-things" element={<FavoriteThingsPage />} />
          <Route exact path="/demo-typography" element={<DemoTypographyPage />} />
          <Route exact path="/demo-plotly" element={<DemoPlotlyPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  )
};
