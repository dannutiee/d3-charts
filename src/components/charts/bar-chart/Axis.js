import React, { Component } from "react";
import * as d3Axis from "d3-axis";
import { select, selectAll } from "d3-selection";

const SMOKE_COLOR = "#404861";

class Axis extends Component {
  componentDidMount() {
    this.renderAxis();
    this.addLabels();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const { orient, label } = this.props;

    const axisType = `axis${this.props.orient}`;
    const axis = d3Axis[axisType]()
      .scale(this.props.scale)
      .tickSize(10)
      .tickPadding([12]);

    const tick = selectAll(".tick");
    tick
      .selectAll("text")
      .attr("y", "15")
      .attr("fill", "white");
    tick.selectAll("line").attr("stroke", SMOKE_COLOR);

    select(this.axisElement)
      .call(axis)
      .style("text-anchor", "middle");

    selectAll(".domain").attr("stroke", SMOKE_COLOR);

    // update labels positions
    selectAll(`.label-${orient}`)
      .attr("x", label.Xposition)
      .attr("y", label.Yposition)
      .attr("transform", label.transform);
  }

  addLabels() {
    const { orient, label } = this.props;
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
  }

  render() {
    return (
      <g
        className={`Axis Axis-${this.props.orient}`}
        ref={el => {
          this.axisElement = el;
        }}
        transform={this.props.translate}
      />
    );
  }
}

export default Axis;
