import "./aboutStyles.css";
import "./global.css";

export default function About() {
  return (
    
    <div className="aboutContainer">
      <div className="aboutItem">

        <p className="aboutTitle header">
          I'm Sanah, a second year computer science student at Simon Fraser University and an intern at Ledgrly AI.
        </p>
        <p className="aboutCopy body"> I began programming on my high school VEX Robotics team, 
          where I combined technical skills with teamwork to design 
          my own PID algorithm. As a Computer Science student, I've 
          built a strong foundation in data structures and algorithms 
          while developing proficiency in C++, C, React, HTML, and CSS. 
          Beyond coursework, I've explored personal projects that 
          strengthened my problem-solving and creativity. I'm eager to 
          keep learning and apply my skills to building impactful software.
        </p>
        <div className="aboutLinks body">
          <p>Get in touch:</p>
           <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> Linkedin</a>
           <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> Github</a>
           <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> Email</a>
         </div>
       
      </div>
      
      <div className="aboutItem">
       
      </div>
    </div>
  );
}