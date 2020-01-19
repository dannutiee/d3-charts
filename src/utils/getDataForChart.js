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

export const getMergedData = data => {
  return [].concat.apply([], data);
};

export const getMergedDataCompressed = data => {
  return Array.from(
    data.reduce(
      (m, { letter, count }) => m.set(letter, (m.get(letter) || 0) + count),
      new Map()
    ),
    ([letter, count]) => ({ letter, count })
  );
};
