import { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./homeStyles.css";

export default function Home() {

    useEffect(() => {

        document.getElementById("title").classList.add("show");
        document.querySelector(".auto-type").classList.add("show");
        document.getElementById("links").classList.add("show")

        const typed = new Typed(".auto-type", {
        strings: ["Computer Science Student", 
            "Something Else", 
            "Blah Blah Blah"],
        typeSpeed: 75,
        backSpeed: 75,
        loop: true,

    });

    return () => typed.destroy();
  }, []);

  return (

  <div style={{ position: "relative" }}>

    <div className="container">
      <h1 id="title">Hey, I'm Sanah Tatla</h1>

      <div className="subtitle">
        <h2 className="auto-type"></h2>
      </div>

      <div id="links">
        <Link className="zoom" to="/projects">see my projects</Link>
        <Link className="zoom" to="/about">learn about me</Link>

      </div>
    </div>
    </div>
    
  );
  
}
