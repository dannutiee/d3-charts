import React from "react";
import Axis from "./Axis";

export default ({ scales, margins, svgDimensions }) => {
  const { height, width } = svgDimensions;

  const xProps = {
    orient: "Bottom",
    scale: scales.xScale,
    translate: `translate(0, ${height - margins.bottom})`,
    tickSize: height - margins.top - margins.bottom,
    svgDimensions: svgDimensions,
    label: {
      transform: "rotate(0)",
      Yposition: "40",
      Xposition: width - margins.right,
      text: "Characters"
    }
  };

  const yProps = {
    orient: "Left",
    scale: scales.yScale,
    translate: `translate(${margins.left}, 0)`,
    tickSize: width - margins.left - margins.right,
    svgDimensions: svgDimensions,
    label: {
      transform: "rotate(-90)",
      Yposition: "-50",
      Xposition: -margins.top,
      text: "Ocurences"
    }
  };

  return (
    <g className="Axes">
      <Axis {...xProps} />
      <Axis {...yProps} />
    </g>
  );
};
