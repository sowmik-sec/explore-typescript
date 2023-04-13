"use strict";
// type MyName = string | number;
// let myName: MyName = 542;
var myName = "Habib";
var arr = ["Ahsan"];
var players = ["Habib", 27, false];
var add = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
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
};
console.log(person);
