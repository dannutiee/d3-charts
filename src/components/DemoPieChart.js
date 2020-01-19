import React, { useContext } from "react";
import styled from "styled-components";
import Chart from "./charts/pie-chart/Chart";
import { countLetterOcurences } from "../utils/countLetterOcurences";
import getDataForChart from "../utils/getDataForChart";
import chartsContext from "../_context/chartsContext";

const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DemoBarChart = props => {
  const [state, dispatch] = useContext(chartsContext);

  const formatUserData = userData => {
    return userData.reduce(
      (obj, item) => Object.assign(obj, { [item.letter]: item.count }),
      {}
    );
  };

  const sumObjectValues = obj => Object.values(obj).reduce((a, b) => a + b);

  let dataUser1 = formatUserData(
    getDataForChart(countLetterOcurences(state.text.user1))
  );
  let dataUser2 = formatUserData(
    getDataForChart(countLetterOcurences(state.text.user2))
  );

  const data = {
    user1: sumObjectValues(dataUser1),
    user2: sumObjectValues(dataUser2)
  };

  return (
    <ChartWrapper style={{ width: "100%", height: "100%" }}>
      <Chart {...props} data={data} />
    </ChartWrapper>
  );
};

export default DemoBarChart;
