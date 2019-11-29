export const repeativeArray = (arr, n) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let x = [];
    for (let j = 0; j < n; j++) {
      x.push(arr[i]);
    }
    result.push(x);
  }
  return result;
};
