// const user: (string | number)[] = ["ahs", 1]
let user: [string, number, boolean];

user = ["hc", 131, true];

let rgb: [number, number, number] = [244, 134, 234];

type User = [number, string];

const newUser: User = [6, "ah@san.com"];

newUser[1] = "fads";
console.log(newUser);

export {};
