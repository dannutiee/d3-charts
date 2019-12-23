import React from "react";

const chartsContext = React.createContext({});

export const ChartsProvider = chartsContext.Provider;
export const ChartsConsumer = chartsContext.Consumer;

export default chartsContext;
