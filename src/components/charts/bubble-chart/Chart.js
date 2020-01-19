import React, { useEffect } from "react";
import styled from "styled-components";
import * as d3 from "d3";
import ResponsiveWrapper from "../../ResponsiveWrapper";
import {
  getMergedData,
  getMergedDataCompressed
} from "../../../utils/getDataForChart";
import { renderBubble } from "./BubbleBody";
import { addTooltip } from "../../Tooltip";

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Chart = ({ parentWidth, data }) => {
  const margin = 50;
  const width = Math.max(parentWidth, 600);
  const height = 400 - margin * 2;

  const dataCompressed = getMergedDataCompressed(getMergedData(data));

  useEffect(() => {
    renderBubble(width, height, dataCompressed);
    addTooltip("#bubble-chart", "my-bubble-tooltip");
  }, []); // will run only once

  useEffect(() => {
    d3.selectAll(".bubble-chart").remove();
    renderBubble(width, height, dataCompressed);
  });

  return <CenteredWrapper id="bubble-chart" />;
};

export default ResponsiveWrapper(Chart);
