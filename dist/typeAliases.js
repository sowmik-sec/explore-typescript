"use strict";
// type MyName = string | number;
// let myName: MyName = 542;
var person = {
    name: "Ahsan",
    age: 27,
    phone: "01333333333",
    address: {
        present: "Bhurungamari",
        permanent: "Bhurungamari",
    },
    favorite: [
        { type: "food", value: "Biriyani" },
        { type: "star", value: "Melody" },
    ],
    isLoggedIn: false,
};
if (Array.isArray(person.phone)) {
    person.phone.map(function (val) { return val.toLowerCase; });
}
else {
    person.phone.toLowerCase();
}
console.log(person);
