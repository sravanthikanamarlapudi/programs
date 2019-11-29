export const secondLargestElement = arr => {
  let result;
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        result = arr[1];
      }
    }
  }
  return result;
};
