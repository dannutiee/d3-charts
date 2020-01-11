import React, { useReducer } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../theme";
import { ChartsProvider } from "../_context/chartsContext";
import { barChartReducer, initialBarChartState } from "../_reducers/barchart";
import Dashboard from "../components/Dashboard";

const App = () => {
  const useChartsState = useReducer(barChartReducer, initialBarChartState);

  return (
    <div className="App">
      <ChartsProvider value={useChartsState}>
        <ThemeProvider theme={defaultTheme}>
          <Dashboard />
        </ThemeProvider>
      </ChartsProvider>
    </div>
  );
};

export default App;
