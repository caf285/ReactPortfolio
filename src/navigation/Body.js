// react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page components
import HomePage from "../pages/Home.js";
import NoPage from "../pages/NoPage.js";

function Body(props) {
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
}

export default Body;
