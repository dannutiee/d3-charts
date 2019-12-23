import React, { Component } from "react";
import select from "d3-selection";

class Bars extends Component {
  state = {
    tip: false
  };

  render() {
    const { scales, margins, data, svgDimensions } = this.props;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;

    const bars = data.map((item, key) => (
      <g key={key}>
        <linearGradient id="svgLinearGradient" x1="0" y1="0" x2="0" y2="1">
          <stop
            stopOpacity="1"
            stopColor="rgba(252,207,49,1)"
            offset="0"
          ></stop>
          <stop
            stopOpacity="0.8"
            stopColor="rgba(245,85,85,0.8)"
            offset="1"
          ></stop>
          <stop
            stopOpacity="0.8"
            stopColor="rgba(245,85,85,0.8)"
            offset="1"
          ></stop>
        </linearGradient>
        <rect
          className={"bar"}
          x={scales.xScale(item.letter)}
          y={yScale(item.count)}
          height={height - margins.bottom - scales.yScale(item.count)}
          width={xScale.bandwidth()}
          fill={"url(#svgLinearGradient)"}
          rx={15}
        />
      </g>
    ));

    return <g className="Bars">{bars}</g>;
  }
}

export default Bars;
