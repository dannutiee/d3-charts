import React from "react";
import BarChart from "./charts/BarChart";

const DemoBarChart = props => {
  console.log("props", props);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <BarChart xLabel="Characters" yLabel="Occurrences" {...props} />
    </div>
  );
};

export default DemoBarChart;
