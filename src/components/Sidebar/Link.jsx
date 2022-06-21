import React from "react";

const Link = (props) => {
  return (
    <div className="sidebar-link">
      <img src={props.icon} alt="Icon" />
      <div>{props.name}</div>
    </div>
  );
};

export default Link;
