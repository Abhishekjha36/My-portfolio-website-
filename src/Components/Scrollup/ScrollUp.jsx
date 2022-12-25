import React from "react";
import "./scrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollK = document.querySelector(".scrollup");
    if (this.scrollY >= 460) scrollK.classList.add("show-Scroll");
    else scrollK.classList.remove("show-Scroll");
  });
  return (
    <a href="#" className="scrollup">
      <i className="fa-solid fa-arrow-up scrollup-icon"></i>
    </a>
  );
};

export default ScrollUp;
