import './style.css'
import tiles from './tiles.json'

function renderTile(image, name) {
  return `
    <div class="card shadow-sm items-center hover:bg-neutral-700">
      <img class="size-30 rounded-box" src="assets/images/${image}" alt="${name}" />
      <h2 class="card-title">${name}</h2>
    </div>
  `;
}

var sortedTiles = tiles.sort((a, b) => a.name.localeCompare(b.name));
var tilesHtml = sortedTiles.reduce((accumulator, tile) => (accumulator ?? '') + renderTile(tile.image, tile.name), null);

document.querySelector('#tiles').innerHTML = tilesHtml;
