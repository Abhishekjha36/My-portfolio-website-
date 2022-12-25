import React from "react";
import { projectsData } from "./Data";
import WorkItem from "./WorkItem";

function Works() {
  return (
    <div className="work_container">
      {projectsData.map((item) => {
        return <WorkItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Works;
