import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import "./Skills.css";
function Skills() {
  return (
    <section className="auto skills" id="skills">
      <div className="about">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>
      </div>

      <div className="skills_container">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
