export const mergeSort = (arr1, arr2) => {
  arr1 = [...arr1, ...arr2];
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] < arr1[j]) {
        let temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
    }
  }
  return arr1;
};
