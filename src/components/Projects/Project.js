import React from "react";
import "./Project.css";

const Project = ({ scrollTo }) => {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <p>
        A collection of personal and collaborative projects where I’ve applied
        front-end technologies to bring ideas to life. Each one reflects my
        growth as a developer and my love for clean, user-friendly design.
      </p>

      <a href="https://next-personal-blog-nine.vercel.app/">
        <img src="./screemshoot.png" alt="" />
      </a>
    </div>
  );
};

export default Project;
