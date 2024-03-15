// react
import { useContext, lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// mui
import CircularProgress from '@mui/material/CircularProgress';

// context
import { BasenameContext } from "../App.js";

// page components
const HomePage = lazy(() => import("../pages/Home.js"));
const FavoriteBooksPage = lazy(() => import("../pages/FavoriteBooks.js"));
const FavoriteGamesPage = lazy(() => import("../pages/FavoriteGames.js"));
const FavoriteMoviesPage = lazy(() => import("../pages/FavoriteMovies.js"));
const FavoriteThingsPage = lazy(() => import("../pages/FavoriteThings.js"));
const DemoTypographyPage = lazy(() => import("../pages/DemoTypography.js"));
const DemoPlotlyPage = lazy(() => import("../pages/DemoPlotly.js"));
const DemoLeafletPage = lazy(() => import("../pages/DemoLeaflet.js"));

// 404
const NoPage = lazy(() => import( "../pages/NoPage.js"));

function CenterLoader() {
  return (
    <div style={{ position: "relative", height: "50px", width: "50px", margin: "auto" }}>
      <CircularProgress />
    </div>
  );
}

export default function Body() {
  const basename = useContext(BasenameContext)

  return (
    <div>
      <Router>
        <Suspense fallback={<CenterLoader />}>
        <Routes basename={basename}>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/favorite-books" element={<FavoriteBooksPage />} />
          <Route exact path="/favorite-games" element={<FavoriteGamesPage />} />
          <Route exact path="/favorite-movies" element={<FavoriteMoviesPage />} />
          <Route exact path="/favorite-things" element={<FavoriteThingsPage />} />
          <Route exact path="/demo-typography" element={<DemoTypographyPage />} />
          <Route exact path="/demo-plotly" element={<DemoPlotlyPage />} />
          <Route exact path="/demo-leaflet" element={<DemoLeafletPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        </Suspense>
      </Router>
    </div>
  )
};
