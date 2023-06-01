var User = {
    name: "Ahsan",
    email: "ah@san.com",
    isActive: true,
};
// function createUser( { name: string; isPaid: boolean }) {
//   console.log(a.name, a.isPaid);
// }
// createUser({ name: "ahsan", isPaid: false });
function createCourse() {
    return { name: "reactjs", price: 44 };
}
console.log(createCourse());
