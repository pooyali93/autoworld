
import React from "react";
export default function Helper(props) {

  document.title = "Autoworld - " + props.title;

  return (
    <div className="w-100">
      {props.children}
      </div>
  );
};

