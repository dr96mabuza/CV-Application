import React from "react";

function Display(props) {
  return (
    <div>
      {props.name} {props.surname}
    </div>
  );
}

export default Display;
