import "./index.css";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMePage from "./pages/AboutMePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-blog" element={<SingleBlog />} />
          <Route path="/about-me" element={<AboutMePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
