import React, { Component, useContext } from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import Axes from "./Axes";
import Bars from "./Bars";
import * as d3 from "d3";
import ResponsiveWrapper from "../ResponsiveWrapper";
import { countLetterOcurences } from "../../utils/countLetterOcurences";
import getDataForChart from "../../utils/getDataForChart";
import chartsContext from "../../_context/chartsContext";

const Chart = ({ parentWidth }) => {
  const [state, dispatch] = useContext(chartsContext);

  console.log("state---", state);
  const margins = { top: 30, right: 50, bottom: 50, left: 70 };
  const width = 600 - margins.left - margins.right;
  const height = 400 - margins.top - margins.bottom;
  let letters = countLetterOcurences(state.text);
  const data = getDataForChart(letters);

  const svgDimensions = {
    width: Math.max(parentWidth, 600),
    height: height
  };

  // scaleBand type
  const xScale = scaleBand()
    .padding(0.5)
    .domain(data.map(d => d.letter))
    .range([margins.left, svgDimensions.width - margins.right]);

  // scaleLinear type
  const yScale = scaleLinear()
    .domain([0, d3.max(data, d => d.count)])
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
