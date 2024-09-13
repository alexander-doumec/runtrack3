const board = document.getElementById('game-board');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');
let tiles = [...Array(8).keys()]; // [0, 1, ..., 7]
tiles.push(null); // Ajoute la vide
let emptyIndex = 8;

function initGame() {
    board.innerHTML = '';
    message.textContent = '';
    shuffleTiles();
    renderTiles();
}

function shuffleTiles() {
    // Mélangez les tuiles ici (algorithme de mélange)
    for (let i =.length - 1; i >0; i--) {
        const j = Math.floor(Math.random() * (i + ));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
}

function renderTiles() {
    tiles.forEach((tile, index) => {
        const div = document.createElement('div');
        div.className = 'tile';
        if (tile !== null) {
            div.style.backgroundImage = `urlimage${tile + 1}.jpg')`; // Chemin vers les images
            div.addEventListener('click', () => moveTile(index        } else {
            div.className += ' empty';
        }
        board.appendChild(div);
    });
}

function moveTile(index) {
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - , emptyIndex + 3]; // Vérifie les mouvements valides
    if (validMoves.includes(index)) {
        tiles[emptyIndex] = tiles[index];
        tiles[index] = null;
        emptyIndex = index;
        renderTiles();
        checkWin();
    }
}

function checkWin() {
    if (tiles.slice(0, 8).every((tile, index) => tile === index)) {
        message.textContent = "Vous avez gagné";
        message.style.color = "green";
        restartButton.style.display = 'block';
    }
}

restartButton.addEventListener('click', initGame);

// Lancer le jeu du chargement
initGame();