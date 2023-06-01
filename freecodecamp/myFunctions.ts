function addTwo(num: number) {
  return num + 2;
}

addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}

console.log(getUpper("habib"));

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("ahsan", "ah@san.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("ahsan", "ah@san.com");
