import "./index.css";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMePage from "./pages/AboutMePage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cly-add-blog" element={<SingleBlog />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
