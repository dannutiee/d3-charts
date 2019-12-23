const getDataForChart = letters => {
  const preparedData = [];

  for (let el in letters) {
    preparedData.push({
      letter: el,
      count: letters[el]
    });
  }
  return preparedData;
};

export default getDataForChart;
