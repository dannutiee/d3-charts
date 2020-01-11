import React, { Component } from "react";
import { selectAll } from "d3-selection";
import { renderGradients } from "../gradients";
import * as d3 from "d3";
import { addTooltip, mouseleave, mousemove, mouseover } from "../../Tooltip";

class Bars extends React.Component {
  componentDidMount() {
    addTooltip("#bar-chart", "my-bartooltip");

    selectAll(".bar-group")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
    this.renderBars();
  }

  componentDidUpdate() {
    this.updateBars();
  }

  renderBars = () => {
    const { scales, margins, data, svgDimensions } = this.props;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;
    let divide = data.length;

    for (let count in data) {
      d3.select("#Bars")
        .append("g")
        .attr("class", `user-${+count + 1} bar-group`)
        .selectAll(`.rect${count + 1}`)
        .data(data[count])
        .enter()
        .append("g")
        .attr("data-id", d => `${data[count].indexOf(d)}`)
        .append("rect")
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

  updateBars() {
    d3.selectAll(".bar-group").remove();
    this.renderBars();
  }

  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <g id="Bars"></g>
        {renderGradients(data)}
      </React.Fragment>
    );
  }
}

export default Bars;
