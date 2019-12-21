import React from "react";
import * as d3 from "d3";
import { withFauxDOM } from "react-faux-dom";

class BarChart extends React.Component {
  componentDidMount() {
    const fauxChartDiv = this.props.connectFauxDOM("div", "chart");
    this.drawChart(fauxChartDiv);
    this.props.animateFauxDOM(800); // todo : check exactly what it do :)
  }

  drawChart(anchor) {

    const margin = { top: 20, right: 10, bottom: 50, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    d3.json("data/data.json")
      .then(data => {
        data.forEach(el => {
          el.height = +el.height;
        });

        const g = d3
          .select(anchor)
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.left + ", " + margin.top + ")"
          );

        const x = d3
          .scaleBand()
          .domain(data.map(d => d.name))
          .range([0, width])
          .paddingInner(0.3)
          .paddingOuter(0.5);

        const y = d3
          .scaleLinear()
          .domain([0, d3.max(data, d => d.height)])
          .range([height, 0]);

        const xAxisCall = d3.axisBottom(x);
        g.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxisCall)
          .selectAll("text")
          .attr("y", "10")
          .attr("x", "-5")
          .attr("text-anchor", "end")

        const yAxisCall = d3.axisLeft(y);
        g.append("g")
          .attr("class", "y-axis")
          .call(yAxisCall);

        const rectangles = g.selectAll("rect").data(data);

        rectangles
          .enter()
          .append("rect")
          .attr("x", d => x(d.name))
          .attr("y", d => y(d.height))
          .attr("rx", "20")
          .attr("ry", "20")
          .attr("height", (d, i) => height - y(d.height))
          .attr("width", x.bandwidth)
          .attr("fill", "red");

      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return this.props.chart;
  }
}

BarChart.defaultProps = {
  chart: "loading"
};

export default withFauxDOM(BarChart);
