// react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page components
import HomePage from "../pages/Home.js";
import NoPage from "../pages/NoPage.js";

export default function Body(props) {
  const basename = props.basename;

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
