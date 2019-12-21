import React, { useReducer } from "react";
import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "../theme";
import { ChartsProvider } from "../_context/chartsContext";
import { barChartReducer, initialBarChartState } from "../_reducers/barchart";
import DemoBarChart from "../components/DemoBarChart";

const AppBody = styled.div`
  font-family: "Open sans", sans-serif;
`;

const App = () => {
  const useChartsState = useReducer(barChartReducer, initialBarChartState);

  return (
    <div className="App">
      <ChartsProvider value={useChartsState}>
        <ThemeProvider theme={defaultTheme}>
          <DemoBarChart />
        </ThemeProvider>
      </ChartsProvider>
    </div>
  );
};

export default App;
