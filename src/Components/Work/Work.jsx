import React from "react";
import Works from "./Works";
import "./Work.css";

function Work() {
  return (
    <section className="work auto" id="portfolio">
      <div className="about">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most recent works</span>
      </div>

      <Works />
    </section>
  );
}

export default Work;
