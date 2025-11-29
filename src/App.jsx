import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Projects from "./pages/projects.jsx";
import About from "./pages/about.jsx";
import Resume from "./pages/resume.jsx";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>

    </BrowserRouter>
      
  );
}
