import * as d3 from "d3";
import { createSimulation } from "./simulation";
import { mouseleave, mousemove, mouseover } from "../../Tooltip";

export const renderBubble = (width, height, dataCompressed) => {
  const radiusScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataCompressed, d => d.count)])
    .range([0, d3.max(dataCompressed, d => d.count)]);

  const svg = d3
    .select("#bubble-chart")
    .append("svg")
    .attr("class", "bubble-chart")
    .attr("width", width)
    .attr("height", height);

  const node = svg
    .append("g")
    .selectAll("circle")
    .data(dataCompressed)
    .enter()
    .append("g")
    .attr("class", "circle")
    .append("circle")
    .attr("r", d => (d.count === 0 ? d.count : radiusScale(d.count * 2 + 10)))
    .style("fill", "rgb(84, 94, 163)")
    .style("fill-opacity", 0.3)
    .style("stroke-width", 2)
    .attr("tooltipid", "#my-bubble-tooltip")
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
    .attr("stroke", "rgba(221, 216, 216, 0.5)");

  //add text only when the count of letter is greater than 0
  const text = d3
    .selectAll(".circle")
    .filter(d => d.count !== 0)
    .append("text")
    .style("fill", "white");

  createSimulation(width, height, radiusScale)
    .nodes(dataCompressed)
    .on("tick", d => {
      node.attr("cx", d => d.x).attr("cy", d => d.y);

      text
        .attr("dx", d => d.x - 5)
        .attr("dy", d => d.y + 5)
        .text(d => d.letter);
    });
};
