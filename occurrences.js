export const occurrences = (arr, value) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      result++;
    }
  }
  return result;
};
