import React, { useEffect, useRef } from "react";
import * as d3Axis from "d3-axis";
import { select, selectAll } from "d3-selection";

const SMOKE_COLOR = "rgba(54, 61, 81, 0.7)";

const Axis = ({ orient, label, tickSize, scale, translate }) => {
  let axisElement = null;

  useEffect(() => {
    renderAxis();
    addLabels();
  }, []); // will run only once

  // old componentDidUpdate
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      renderAxis();
    }
  });

  const renderAxis = () => {
    const axisType = `axis${orient}`;
    const axis = d3Axis[axisType]()
      .scale(scale)
      .tickSize(-tickSize)
      .tickPadding([12]);

    const axisBottom = select(".Axis-Bottom");

    const tick = selectAll(".tick");
    tick.selectAll("text").attr("y", "0");

    axisBottom
      .selectAll(".tick")
      .selectAll("text")
      .attr("y", "15");

    select(axisElement)
      .call(axis)
      .style("text-anchor", "middle");

    selectAll(".domain").attr("stroke", SMOKE_COLOR);
    selectAll("line").attr("stroke", SMOKE_COLOR);
    selectAll("text").attr("fill", "white");

    // update labels positions
    selectAll(`.label-${orient}`)
      .attr("x", label.Xposition)
      .attr("y", label.Yposition)
      .attr("transform", label.transform);
  };

  const addLabels = () => {
    selectAll(`.Axis-${orient}`)
      .append("text")
      .attr("class", `label-${orient}`)
      .style("text-anchor", "end")
      .attr("fill", "white")
      .text(label.text)
      .attr("x", label.Xposition)
      .attr("y", label.Yposition)
      .attr("transform", label.transform)
      .style("font-size", "12px");
  };

  return (
    <g
      className={`Axis Axis-${orient}`}
      ref={el => {
        axisElement = el;
      }}
      transform={translate}
    />
  );
};

export default Axis;
