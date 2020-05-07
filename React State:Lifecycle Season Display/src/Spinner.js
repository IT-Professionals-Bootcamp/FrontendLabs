import React from "react";
import "./Spinner.css";

const Spinner = (props) => {
  return (
    <div className="c">
      <div className="s" />
      <div className="t">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
