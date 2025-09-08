import "./projectsStyles.css";
import "./projectsStyles.css";

export default function Projects() {
  return (
    <div>
      <h1 className="projectsTitle header">My Projects</h1>

      <div className="card">

        <p className="cardTitle subheader">Website</p>
        <p className="cardDesc body">I made this website, ask chagpt to make a description!</p>
        <div className="tagCont">
          <span className="tag body">React</span>
          <span className="tag body">HTML</span>
          <span className="tag body">CSS</span>
          <span className="tag body">JavaScript</span>
        </div>

      </div>

    </div>

  );
}
