import React, { useContext } from "react";
import chartsContext from "../../_context/chartsContext";

export const SvgLinearGradient = ({ user }) => {
  const [state, dispatch] = useContext(chartsContext);

  const gradientId = `svgLinearGradient-${user}`;
  return (
    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
      <stop stopOpacity="1" stopColor={state.color[user][0]} offset="0"></stop>
      <stop
        stopOpacity="0.8"
        stopColor={state.color[user][1]}
        offset="1"
      ></stop>
    </linearGradient>
  );
};

export const renderGradients = data => {
  const group = data.map((item, key) => (
    <SvgLinearGradient key={key} user={`user${key + 1}`} />
  ));
  return group;
};
