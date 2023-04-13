"use strict";
// Object
// let player: {
//   name: string;
//   age?: number;
//   country: string;
//   isMarried: boolean;
//   favoritePlace?: string[];
// };
// player = {
//   name: "Ahsan",
//   age: 27,
//   country: "BD",
//   isMarried: false,
//   favoritePlace: ["Islampur", "Bashzani"],
// };
// console.log(player);
// player.age = player?.age! + 5;
// console.log(player);
// player = {
//   name: "Habib",
//   //   age: 27,
//   country: "BD",
//   isMarried: false,
//   favoritePlace: ["Islampur", "Bashzani"],
// };
// console.log(player);
// player.favoritePlace && (player.favoritePlace[1] = "VoteHut");
// console.log(player);
// Enum
var Friends;
(function (Friends) {
    Friends[Friends["Ahsan"] = 10] = "Ahsan";
    Friends[Friends["Habib"] = 9] = "Habib";
    Friends[Friends["Sowmik"] = 5] = "Sowmik";
})(Friends || (Friends = {}));
console.log(Friends[5]);
var Configs;
(function (Configs) {
    Configs["API_Key"] = "api_key";
    Configs["Domain_Name"] = "domain_name";
})(Configs || (Configs = {}));
console.log(Configs.Domain_Name);
