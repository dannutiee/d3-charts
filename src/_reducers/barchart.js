export const initialBarChartState = {
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend interdum dignissimzzz."
};

// todo
export const barChartReducer = (state, { type, text }) => {
  switch (type) {
    case "SET_TEXT":
      return {
        text
      };
    default:
      return state;
  }
};
