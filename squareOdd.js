export const squareOdd = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    } else {
      result.push(arr[i] * arr[i]);
    }
  }
  return result;
};
