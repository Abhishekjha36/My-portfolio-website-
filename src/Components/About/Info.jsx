import React from "react";

function Info() {
  return (
    <div className="about_info">
      <div className="about_box">
        <i className="fa-solid fa-trophy about_icon"></i>
        <h3 className="info_title">Experience</h3>
        <span className="info_subtitle">2 Years Working</span>
      </div>

      <div className="about_box">
        <i className="fa-solid fa-briefcase about_icon"></i>
        <h3 className="info_title">Completed</h3>
        <span className="info_subtitle">48 + Projects</span>
      </div>

      <div className="about_box">
        <i className="fa-solid fa-headphones about_icon"></i>
        <h3 className="info_title">Support</h3>
        <span className="info_subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;
