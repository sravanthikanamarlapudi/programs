export const adjacentValues = arr => {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 5) {
      
      result.push([arr[i]+arr[i+1]]);
    }
  }
  return result;
};
