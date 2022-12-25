import React from "react";

function WorkItem({ item }) {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <div className="workk-button">
        <a href={item.link} target="_blank" className="work_button">
          Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </a>

        <a href={item.code} target="_blank" className="work_button">
          GetHub <i className="fa-solid fa-code work_button-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default WorkItem;
