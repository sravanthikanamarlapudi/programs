export const secondLargestElement = arr => {
  let largest = 0;
  let sLargest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      sLargest = largest;
      largest = arr[i];
    }
    if (largest > arr[i] && sLargest < arr[i]) sLargest = arr[i];
  }
  return sLargest;
};
