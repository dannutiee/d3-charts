import * as d3 from "d3";

export const createSimulation = (width, height, radiusScale) => {
  return d3
    .forceSimulation()
    .force(
      "center",
      d3
        .forceCenter()
        .x(width / 2)
        .y(height / 2)
    ) // Attraction to the center of the svg area
    .force("charge", d3.forceManyBody().strength(2))
    .force(
      "forceX",
      d3
        .forceX()
        .strength(0.1)
        .x(width * 0.5)
    )
    .force(
      "forceY",
      d3
        .forceY()
        .strength(0.1)
        .y(height * 0.5)
    )
    .force(
      "collide",
      d3.forceCollide().radius(d => radiusScale(d.count * 2 + 15))
    );
};
