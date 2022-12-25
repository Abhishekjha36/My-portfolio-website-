import React from "react";
import Profile from "../../assets/abhishek.jpg";
import "./About.css";
import Info from "./Info";

function About() {
  return (
    <section className="auto section" id="about">
      <div className="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>
      </div>
      <div className="about_container">
        <img src={Profile} alt="" className="about_img" />

        <div className="about_data">
          <Info />
          <p className="about_discri">
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>

          <div className="downlode">
            <a href="">Downlode CV</a>
            <i className="fa-solid fa-floppy-disk fill"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
