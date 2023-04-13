let player: {
  name: string;
  age?: number;
  country: string;
  isMarried: boolean;
  favoritePlace?: string[];
};
player = {
  name: "Ahsan",
  age: 27,
  country: "BD",
  isMarried: false,
  favoritePlace: ["Islampur", "Bashzani"],
};
console.log(player);
player.age = player?.age! + 5;
console.log(player);
player = {
  name: "Habib",
  //   age: 27,
  country: "BD",
  isMarried: false,
  favoritePlace: ["Islampur", "Bashzani"],
};
console.log(player);
player.favoritePlace && (player.favoritePlace[1] = "VoteHut");
console.log(player);
