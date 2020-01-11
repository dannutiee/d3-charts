import React from "react";
import ResponsiveWrapper from "../../ResponsiveWrapper";
import PieBody from "./PieBody";

const Chart = ({ parentWidth, data }) => {
  const margin = 50;
  const width = Math.max(parentWidth, 400);
  const height = 500 - margin * 2;

  const svgDimensions = {
    margin,
    width,
    height
  };

  return (
    <div id="pie-chart">
      <svg
        id="my_piechart"
        width={svgDimensions.width}
        height={svgDimensions.height}
      >
        <PieBody svgDimensions={svgDimensions} data={data} />
      </svg>
    </div>
  );
};

export default ResponsiveWrapper(Chart);
