import React, { Fragment, useEffect, useRef } from "react";
import { selectAll } from "d3-selection";
import { renderGradients } from "../gradients";
import * as d3 from "d3";
import { addTooltip, mouseleave, mousemove, mouseover } from "../../Tooltip";

const Bars = ({ scales, margins, data, svgDimensions }) => {
  const { xScale, yScale } = scales;
  const { height } = svgDimensions;

  useEffect(() => {
    addTooltip("#bar-chart", "my-bartooltip");
  }, []); // will run only once

  useEffect(() => {
    selectAll(".bar-group")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    renderBars();
  });

  // old componentDidUpdate
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      updateBars();
    }
  });

  const renderBars = () => {
    let divide = data.length;

    for (let count in data) {
      d3.select("#Bars")
        .append("g")
        .attr("class", `user-${+count + 1} bar-group`)
        .selectAll(`.rect${count + 1}`)
        .data(data[count])
        .enter()
        .append("g")
        .attr("class", "bar")
        .attr("data-id", d => `${data[count].indexOf(d)}`)
        .append("rect")
        .style("transition", "0.8s")
        .style("opacity", "0.8")
        .attr(
          "x",
          d => xScale(d.letter) + +count * (2 + xScale.bandwidth() / divide)
        )
        .attr("y", d => yScale(d.count))
        .attr("width", xScale.bandwidth() / divide)
        .attr("height", d => height - margins.bottom - yScale(d.count))
        .attr("fill", `url(#svgLinearGradient-user${+count + 1}`)
        .attr("class", "rectangle")

        .attr("tooltipid", "#my-bartooltip")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave);
    }
  };

  const updateBars = () => {
    d3.selectAll(".bar-group").remove();
    renderBars();
  };

  return (
    <Fragment>
      <g id="Bars"></g>
      {renderGradients(data)}
    </Fragment>
  );
};

export default Bars;
