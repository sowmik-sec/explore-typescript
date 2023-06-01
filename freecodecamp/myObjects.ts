const User = {
  name: "Ahsan",
  email: "ah@san.com",
  isActive: true,
};

// function createUser(a: { name: string; isPaid: boolean }) {
//   console.log(a.name, a.isPaid);
// }

// const a = { name: "ahsan", isPaid: false, email: "ah@san.com" };

// createUser(a);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 44 };
}

console.log(createCourse());

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

function createUser(u: User) {
  return { name: "", email: "", isActive: true };
}

createUser({ _id: "234", name: "", email: "", isActive: true });

let myUser: User = {
  _id: "1234",
  name: "ahsan",
  email: "ah@san.com",
  isActive: true,
};

myUser.email = "habib@gmail.com";
