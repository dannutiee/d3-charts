import React from "react";
import * as d3 from "d3";
import { addTooltip, mouseleave, mousemove, mouseover } from "../../Tooltip";

class PieBody extends React.Component {
  componentDidMount() {
    this.renderPieChart();
    addTooltip("#pie-chart", "my-tooltip");
  }

  componentDidUpdate() {
    this.renderPieChart();
  }

  renderPieChart() {
    const { data } = this.props;
    const { margin, width, height } = this.props.svgDimensions;

    let radius = Math.min(width, height) / 2 - margin;
    this.updatePieChart();

    let color = d3
      .scaleOrdinal()
      .domain(data)
      .range([
        `url(#svgLinearGradient-user1)`,
        `url(#svgLinearGradient-user2)`
      ]);

    let pie = d3.pie().value(function(d) {
      return d.value;
    });
    let data_ready = pie(d3.entries(data));

    d3.select("#chart-body")
      .selectAll("whatever")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("class", "pie-path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(100) // This is the size of the donut hole
          .outerRadius(radius)
      )
      .attr("fill", d => color(d.data.key))
      .attr("stroke", "none")
      .attr("tooltipid", "#my-tooltip")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);
  }

  updatePieChart() {
    const { width, height } = this.props.svgDimensions;

    d3.selectAll(".pie-path").remove();
    d3.select("#chart-body").attr(
      "transform",
      "translate(" + width / 2 + "," + height / 2 + ")"
    );
  }

  render() {
    return <g id="chart-body" />;
  }
}

export default PieBody;
