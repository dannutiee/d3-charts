import React, { Component } from "react";
import select from "d3-selection";
import { SvgLinearGradient } from "../gradients";

const Bars = props => {
  const { scales, margins, data, svgDimensions } = props;
  const { xScale, yScale } = scales;
  const { height } = svgDimensions;

  let divide = data.length;

  const bars = data.map((userData, i) => {
    const group = userData.map((item, key) => (
      <g key={key}>
        <rect
          className={"bar"}
          x={scales.xScale(item.letter) + i * (2 + xScale.bandwidth() / divide)}
          y={yScale(item.count)}
          height={height - margins.bottom - scales.yScale(item.count)}
          width={xScale.bandwidth() / divide}
          fill={`url(#svgLinearGradient-user${i + 1})`}
          rx={5}
        />
      </g>
    ));
    return (
      <g>
        <SvgLinearGradient user={`user${i + 1}`} /> {group}
      </g>
    );
  });

  return <g className="Bars">{bars}</g>;
};

export default Bars;
