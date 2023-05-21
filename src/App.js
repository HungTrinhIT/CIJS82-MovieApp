import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import SearchPage from "./pages/SearchPage/SearchPage";

// SPA: Single Page Application
function App() {
return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

// Pipeline
// Step 1: test case
// Step 2: coding convention eslint camelCase , ;
// Step 3: ...
// Step build
