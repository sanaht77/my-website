import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import home from "./pages/home";
import projects from "./pages/projects";
import about from "./pages/about";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route index element={<home />} />
        <Route path="/projects" element={<projects />} />
        <Route path="/about" element={<about />} />

      </Routes>

    </BrowserRouter>
      
  );
}
