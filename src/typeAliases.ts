// type MyName = string | number;
// let myName: MyName = 542;

// type MyName = "Ahsan" | "Habib";
// let myName: MyName = "Habib";
// console.log(myName);

// type MyName = "Ahsan" | "Habib";
// let myName: MyName = "Habib";
// type arr = MyName[];
// const arr: arr = ["Ahsan"];

// type Players = [string, number, boolean];

// let players: Players = ["Habib", 27, false];

// type Add = (num1: number, num2: number, num3?: number) => number;
// const add: Add = (num1, num2, num3 = 0): number => {
//   return num1 + num2 + num3;
// };

type Address = {
  present: string;
  permanent: string;
};
type Favorite = {
  type: "food" | "player" | "star";
  value: string;
};

type Auth = {
  isLoggedIn: boolean;
};

type Person = {
  name: string;
  age: number;
  phone: string | string[];
  address: Address;
  favorite: Favorite[];
} & Auth;

const person: Person = {
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
  person.phone.map((val) => val.toLowerCase);
} else {
  person.phone.toLowerCase();
}

console.log(person);
