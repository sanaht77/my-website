import { BrowserRouter, Routes, Route } from "react-router-dom";

<<<<<<< HEAD
import Home from "./pages/home.jsx";
import Projects from "./pages/projects.jsx";
import About from "./pages/about.jsx";
=======
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
>>>>>>> 20783901e093a8b7a55dac9b175b5337374a8aa3

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>
      
  );
}
