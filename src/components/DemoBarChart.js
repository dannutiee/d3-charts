import React from "react";
import Chart from "./charts/Chart";

const DemoBarChart = props => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chart {...props} />
    </div>
  );
};

export default DemoBarChart;
