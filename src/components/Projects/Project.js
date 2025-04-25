import React from "react";
import "./Project.css";

const Project = ({ scrollTo }) => {
  const [displayparagraph, setDisplayParagraph] = React.useState(false);

  const handleMouseHover = () => {
    setDisplayParagraph(!displayparagraph);
  };

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>

      <a href="https://next-personal-blog-nine.vercel.app/">
        <img src="./screemshoot.png" alt="" onMouseOver={handleMouseHover} />
        <p
          style={{
            display: displayparagraph ? "none" : "block",
          }}
        >
          A collection of personal and collaborative projects where I’ve applied
          front-end technologies to bring ideas to life. Each one reflects my
          growth as a developer and my love for clean, user-friendly design.
        </p>
      </a>
    </div>
  );
};

export default Project;
