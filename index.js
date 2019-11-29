import "./styles.css";
import { occurrences } from "./occurrences";
import { power } from "./power";
import { squareOdd } from "./squareOdd";
import { factorial } from "./factorial";
import { repeativeArray } from "./repeativeArray";
import { adjacentValues } from "./adjacentValues";
import { secondLargestElement } from "./secondLargestElement";
import { compute } from "./compute";
import { compute2 } from "./compute2";
import { partition } from "./partition";
import { mergeSort } from "./mergeSort";

console.log(occurrences([1, 2, 3, 1, 2, 1, 1, 2], 2));
console.log(power(2, 5));
console.log(squareOdd([11, 3, 4, 5, 6]));
console.log(factorial(5));
console.log(repeativeArray([5, 6, 8, 9], 2));
console.log(adjacentValues([1, 2, 3, 4, 5]));
console.log(secondLargestElement([1, 13, 5, 17, 13]));
console.log("compute " + compute(8, 5));
console.log(compute2(5, 2));
console.log(partition([1, 4, 2, 5, 3], 3));
console.log(mergeSort([5, 2, 3], [1, 4]));
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
