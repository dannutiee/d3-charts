export const initialBarChartState = {
  data: []
};

// todo
export const barChartReducer = (state, { type, proposedDays }) => {
  switch (type) {
    case "SET_DATE":
      return {
        proposedDays,
        error: ""
      };
    default:
      return state;
  }
};
