export const initialBarChartState = {
  text: {
    user1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend interdum dignissimzzz.",
    user2: "Danuta Ludwikowska"
  },
  color: {
    user1: ["rgba(252,207,49,1)", "rgba(245,85,85,0.8)"],
    user2: ["rgb(50, 210, 184)", "rgb(154, 14, 250)"]
  }
};

// todo
export const barChartReducer = (state, { type, text }) => {
  switch (type) {
    case "SET_USER1_TEXT":
      return {
        ...state,
        text: {
          ...state.text,
          user1: text
        }
      };
    case "SET_USER2_TEXT":
      return {
        ...state,
        text: {
          ...state.text,
          user2: text
        }
      };
    default:
      return state;
  }
};
