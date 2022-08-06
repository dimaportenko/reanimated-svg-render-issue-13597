export const testData = [
  {
    value: 22,
    color: "blue",
    percentage: "22",
  },
  {
    value: 34,
    color: "pink",
    percentage: "34",
  },
  {
    value: 44,
    color: "green",
    percentage: "14",
  },
  {
    value: 11,
    color: "yellow",
    percentage: "11",
  },
  {
    value: 50,
    color: "brown",
    percentage: 19,
  },
];

export type TestData = typeof testData;
export type TestDataItem = TestData[0];
