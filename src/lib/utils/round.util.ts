export const round = (number: number, accuracy: number = 2) =>
  Math.round(number * Math.pow(10, accuracy)) / Math.pow(10, accuracy);
