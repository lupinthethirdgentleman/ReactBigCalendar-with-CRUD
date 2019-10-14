import React from "react";
import { getEventTime } from "Helpers/helpers";

const CustomEvent = props => {
  return (
    <div className="d-flex">
      <div className="mx-10 w-100 d-flex justify-content-between">
        <p className="fs-13 mb-0">{props.title}</p>
      </div>
    </div>
  );
};

export default CustomEvent;
