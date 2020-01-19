import React, { useContext } from "react";
import Chart from "./charts/bubble-chart/Chart";
import { countLetterOcurences } from "../utils/countLetterOcurences";
import getDataForChart from "../utils/getDataForChart";
import chartsContext from "../_context/chartsContext";

const DemoBubbleChart = props => {
  const [state, dispatch] = useContext(chartsContext);

  let dataUser1 = getDataForChart(countLetterOcurences(state.text.user1));
  let dataUser2 = getDataForChart(countLetterOcurences(state.text.user2));

  const data = [dataUser1, dataUser2];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chart {...props} data={data} />
    </div>
  );
};

export default DemoBubbleChart;
