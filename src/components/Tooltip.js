import * as d3 from "d3";
import { isRequired } from "../utils/isRequired";

let TOOLTIP_ID = "id";

export const addTooltip = (
  hook = isRequired("hook"),
  id = isRequired("id")
) => {
  d3.select(hook)
    .append("div")
    .attr("id", id)
    .style("opacity", 0)
    .style("position", "absolute")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px");

  TOOLTIP_ID = `#${id}`;
};

const tooltip = hook => d3.select(d3.select(hook).attr("tooltipid"));

// Three function that change the tooltip when user hover / move / leave a cell
export const mouseover = function(d) {
  // d.count && d3.selectAll(".bar").style("opacity", 1);
  tooltip(this).style("opacity", 1);
  d3.select(this)
    .style("stroke", "rgba(246, 246, 246, 0.4)")
    .style("stroke-width", "2px")
    .style("opacity", 1)
    .style("transition", "0.2s");

  //d.count && d3.select(this.parentNode).style("opacity", 0.8);
};
export const mousemove = function(d) {
  // d.count && d3.selectAll(".bar").style("opacity", 0.4);
  // d.count && d3.select(this.parentNode).style("opacity", 1);

  let title = d.data ? d.data.key : d.letter;
  let additionalText = d.data ? " letters" : "";
  tooltip(this)
    // .html("The exact value of<br>this cell is: ")
    .html(title + ": " + (d.value || d.count) + additionalText)
    .style("top", d3.event.offsetY - 10 + "px")
    .style("left", d3.event.offsetX + 10 + "px")
    .style("opacity", 1)
    .style("transition", "0.2s");
};
export const mouseleave = function(d) {
  tooltip(this).style("opacity", 0);
  d3.select(this)
    // .style("stroke", "none")
    .style("opacity", 0.8)
    .style("transition", "0.2s");

  d3.selectAll(".bar")
    .selectAll("rect")
    .style("stroke", "none");
  d3.selectAll("path.pie-path").style("stroke", "none");
};

//
