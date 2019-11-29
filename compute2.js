import { factorial } from "./factorial";
export const compute2 = (n, r) => {
  let result;
  result = factorial(n) / (factorial(r) * factorial(n - r));
  return result;
};
