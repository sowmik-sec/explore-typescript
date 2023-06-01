function addTwo(num: number): number {
  return num + 2;
}

addTwo(5);

function getUpper(val: string): string {
  return val.toUpperCase();
}

console.log(getUpper("habib"));

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("ahsan", "ah@san.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("ahsan", "ah@san.com");

// function getValue(myVal: number) {
//     if(myVal>5) {
//         return true;
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
  return "hello";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
