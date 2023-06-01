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
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User) {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });
