import React from "react";
import Social from "./Social";
import "./Home.css";
import Data from "./Data";
import img from "../../assets/abhishek.jpg";
import ScrollDown from "./ScrollDown";

function Home() {
  return (
    <div className="auto">
      <div className="h-container">
        <Social />
        <div className="home_img">
          <img src={img} alt="" className="img" />
        </div>
        <Data />
      </div>
      <ScrollDown />
    </div>
  );
}

export default Home;
