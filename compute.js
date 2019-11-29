import { factorial } from "./factorial";
import { power } from "./power";
export const compute = (value, num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = sum + power(value, num) / factorial(num);
  }
  return sum;
};
