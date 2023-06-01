var User = {
    name: "Ahsan",
    email: "ah@san.com",
    isActive: true,
};
// function createUser(a: { name: string; isPaid: boolean }) {
//   console.log(a.name, a.isPaid);
// }
// const a = { name: "ahsan", isPaid: false, email: "ah@san.com" };
// createUser(a);
function createCourse() {
    return { name: "reactjs", price: 44 };
}
console.log(createCourse());
function createUser(u) {
    return { name: "", email: "", isActive: true };
}
createUser({ _id: "234", name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "ahsan",
    email: "ah@san.com",
    isActive: true,
};
myUser.email = "habib@gmail.com";
