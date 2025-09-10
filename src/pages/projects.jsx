import "./projectsStyles.css";
import "./projectsStyles.css";

export default function Projects() {
  return (
    <div className="projectsPage">
      <h1 className="projectsTitle header">My Projects</h1>

      <div className="projects">

      <div className="card body">

        <p className="cardTitle subheader">Website &#8594;</p>
        <p className="cardDesc body">I made this website, ask chagpt to make a description</p>
        <div className="tagCont">
          <span className="tag body">React</span>
          <span className="tag body">HTML</span>
          <span className="tag body">CSS</span>
          <span className="tag body">JavaScript</span>
        </div>

      </div>

      <div className="card body">

        <p className="cardTitle subheader">Cat Fact Generator &#8594;</p>
        <p className="cardDesc body">Simple pull from a cat fact API with designed sprites</p>
        <div className="tagCont">
          <span className="tag body">API</span>
          <span className="tag body">HTML</span>
          <span className="tag body">CSS</span>
          <span className="tag body">JavaScript</span>
        </div>

      </div>

      </div>

    </div>

  );
}
