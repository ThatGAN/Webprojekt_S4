import React, { Component } from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Circle = (props) => {
  const { score } = props;
  const { color } = props;
  const { orientation } = props;
  const { width } = props;
  const { diameter } = props;
  return (
    <SemiCircleProgressBar
      percentage={score}
      stroke={color}
      orientation={orientation}
      strokeWidth={width}
      diameter={diameter}
    />
  );
};

export default Circle;
