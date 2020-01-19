import React, { useReducer } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../theme";
import { ChartsProvider } from "../_context/chartsContext";
import { chartsReducer, initialChartsState } from "../_reducers/charts";
import Dashboard from "../components/Dashboard";

const AppWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const App = () => {
  const useChartsState = useReducer(chartsReducer, initialChartsState);

  return (
    <AppWrapper className="App">
      <ChartsProvider value={useChartsState}>
        <ThemeProvider theme={defaultTheme}>
          <Dashboard />
        </ThemeProvider>
      </ChartsProvider>
    </AppWrapper>
  );
};

export default App;
