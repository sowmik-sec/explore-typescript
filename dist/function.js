"use strict";
// function add(num1: number, num2: number) {
//   console.log(num1 + num2);
// }
// add(10, 30);
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// console.log(add(20, 30));
// const add = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// console.log(add(36, 25));
// const add = (...numbers: number[]): number => {
//   const func = (prev: number, cur: number) => prev + cur;
//   return numbers.reduce(func, 0);
// };
// console.log(add(4, 5, 2, 15));
var add;
add = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
console.log(add(36, 25, 4));
