let score: number | string = 33;

score = 44;
score = "43";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let ahsan: User | Admin = {
  name: "Ahsan",
  id: 6,
};

ahsan = { username: "ahsan", id: 6, name: "Ahsan" };

// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// }

// getDbId(3);

function getDbId(id: number | string) {
  // making some API calls
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id += 2;
  }
  console.log(`DB id is: ${id}`);
}

// array
const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (number | string)[] = [1, 2, 3, 4, "3"];

let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";

export {};
