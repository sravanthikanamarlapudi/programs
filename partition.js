export const partition = (arr, num) => {
  let result = [];
  let a = [];
  let b = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      a.push(arr[i]);
    }
    if (arr[i] > num) {
      b.push(arr[i]);
    }
  }
  result.push(a, b);
  return result;
};
