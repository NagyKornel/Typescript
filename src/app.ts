import { Ember } from "./types/Ember";

const x: number = 5;

const nevek: Array<string> = ["a", "b", "c"];
console.log(nevek);
// typeok

const valaki: Ember = { nev: "Pisti", kor: 25 };

console.log(valaki);
const emberek: Array<Ember> = [
  { nev: "Pisti", kor: 25 },
  { nev: "Jani", kor: 37 },
  { nev: "Lilla", kor: 16 },
];

const felnottek: Array<Ember> = emberek.filter((i: Ember) => i.kor >= 18);
console.log(felnottek);
