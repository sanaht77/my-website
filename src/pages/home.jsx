import { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./homeStyles.css";
<<<<<<< HEAD
import Particle from "../components/particle.jsx";
=======
import { Link } from "react-router-dom";
>>>>>>> 20783901e093a8b7a55dac9b175b5337374a8aa3

export default function Home() {

    useEffect(() => {

        document.getElementById("title").classList.add("show");
        document.querySelector(".auto-type").classList.add("show");
        document.getElementById("links").classList.add("show")

        const typed = new Typed(".auto-type", {
        strings: ["Computer Science Student", 
            "Developer", 
            "something else"],
        typeSpeed: 75,
        backSpeed: 75,
        loop: true,

    });

    return () => typed.destroy();
  }, []);

  return (

  <div style={{ position: "relative" }}>
    <Particle />

    <div className="container">
      <h1 id="title">Hi. I'm Sanah.</h1>

      <div className="subtitle">
        <h2 className="auto-type"></h2>
      </div>

      <div id="links">
        <Link className="zoom" to="/projects">see my projects</Link>
        <Link className="zoom" to="/about">learn about me</Link>
<<<<<<< HEAD
        <Link className="zoom" to="/resume">view my resume</Link>

=======
>>>>>>> 20783901e093a8b7a55dac9b175b5337374a8aa3
      </div>
    </div>
    </div>
    
  );
  
}
