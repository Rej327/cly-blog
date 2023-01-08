import "./index.css";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-blog" element={<SingleBlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
