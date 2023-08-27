/* eslint-disable */
import "bootstrap";
import "./style.css";

const who = [
  "My pet rock",
  "My clone",
  "My imaginary friend",
  "The president",
  "Batman",
  "The voices in my head",
  "The CIA"
];

const what = [
  "borrowed my time machine",
  "challenged me to a duel",
  "invited me to a dance battle",
  "challenged me to a staring contest",
  "held me hostage",
  "ate my homework",
  "invited me to explore",
  "invited me to a tea party",
  "proposed to me",
  "invited me to a cult"
];

const where = [
  "in a parallel universe",
  "in an underground bunker",
  "on the moon",
  "yesterday",
  "in Miami",
  "this morning",
  "in the Metaverse",
  "in the Matrix",
  "in a galaxy far, far away",
  "in Gotham City"
];

const excuseSentence = document.getElementById("excuse");
const generateButton = document.getElementById("generateButton");

function generateExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhere = where[Math.floor(Math.random() * where.length)];

  const newSentence = `${randomWho} ${randomWhat} ${randomWhere}`;
  return newSentence;
}

generateButton.addEventListener("click", () => {
  excuseSentence.textContent = generateExcuse();
});

excuseSentence.textContent = generateExcuse();
