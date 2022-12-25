import React from "react";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <div className="container auto">
      <div className="logo">
        <h2 className="h2">
          ABHIS<span className="span">HEK</span>
        </h2>
      </div>
      <nav>
        <ul className={show ? "nav-bar active" : "nav-bar"}>
          <li>
            <a href="#" className="a">
              <i className="fa-solid fa-house-user"></i>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="a">
              <i className="fa-solid fa-circle-info"></i>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="a">
              <i className="fa-solid fa-briefcase"></i>
              Skills
            </a>
          </li>
          <li>
            <a href="#services" className="a">
              <i className="fa-solid fa-briefcase"></i>
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="a">
              <i className="fa-solid fa-diagram-project"></i>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="a">
              <i className="fa-solid fa-address-book"></i>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="toggle">
        <i
          className="bx bxs-grid-alt nav-icon"
          onClick={() => setShow(!show)}
        ></i>
      </div>
    </div>
  );
}

export default Navbar;
