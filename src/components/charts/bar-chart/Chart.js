import React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import Axes from "./Axes";
import Bars from "./Bars";
import * as d3 from "d3";
import ResponsiveWrapper from "../../ResponsiveWrapper";

const Chart = ({ parentWidth, data }) => {
  const margins = { top: 30, right: 50, bottom: 50, left: 70 };
  const width = 600 - margins.left - margins.right;
  const height = 500 - margins.top - margins.bottom;

  const svgDimensions = {
    width: Math.max(parentWidth, 600),
    height: height
  };

  const mergedData = [].concat.apply([], data);
  console.log("me", mergedData);

  // scaleBand type
  const xScale = scaleBand()
    .padding(0.5)
    .domain(mergedData.map(d => d.letter))
    .range([margins.left, svgDimensions.width - margins.right]);

  // scaleLinear type
  const yScale = scaleLinear()
    .domain([0, d3.max(mergedData, d => d.count)])
    .range([svgDimensions.height - margins.bottom, margins.top]);

  return (
    <svg width={svgDimensions.width} height={svgDimensions.height}>
      <Axes
        className="Axes"
        scales={{ xScale, yScale }}
        margins={margins}
        svgDimensions={svgDimensions}
      />
      <Bars
        className="Bars"
        scales={{ xScale, yScale }}
        margins={margins}
        data={data}
        svgDimensions={svgDimensions}
      />
    </svg>
  );
};

export default ResponsiveWrapper(Chart);
