import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container auto">
        <h1 className="footer_title">Abhishek Jha</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonial" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/abhishek-jha-695b8b203/"
            className="footer_social-icon"
            target={"_blank"}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/mr_madhav_jha/"
            className="footer_social-icon"
            target={"_blank"}
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://github.com/Abhishekjha36"
            className="footer_social-icon"
            target={"_blank"}
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Abhishek jha. All right reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
