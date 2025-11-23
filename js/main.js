const root = document.getElementById("root");

const data = await fetch("../data/characterJSON.json");
const chars = await data.json();

import createCharacterTiles from "./character_page.js";

const character_tiles = createCharacterTiles(chars);

root.appendChild(character_tiles);