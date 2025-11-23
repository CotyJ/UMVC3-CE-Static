const root = document.getElementById("root")


export default function createCharacterTiles (character_json) {

  const tile_container = document.createElement('ul');
  tile_container.classList.add('tile-container');

  for (let i = 0; i < character_json.length; i++) {
    const character = character_json[i];
    const box = document.createElement('li');
    box.classList.add('character-tile');

    const char_image = document.createElement('img');
    char_image.src = '../assets/images/thumbnails/gambit_thumb.png';

    // box.textContent = i;

    box.addEventListener('click', () => {
      console.log(character.name);
    });

    box.appendChild(char_image);
    tile_container.appendChild(box);
  }

  return tile_container;
};
