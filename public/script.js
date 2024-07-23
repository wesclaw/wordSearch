const gridElement = document.getElementById('word-search-grid');
const wordsElement = document.querySelector('.words'); // Target the .words div

const ws = new WebSocket('ws://localhost:3000');

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const grid = data.grid;
    const words = data.words;

    renderGrid(grid);
    renderWords(words);
};

function renderGrid(grid) {
    gridElement.innerHTML = '';
    for (const row of grid) {
        for (const cell of row) {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            cellElement.textContent = cell;
            gridElement.appendChild(cellElement);
        }
    }
}


function renderWords(words) {
    wordsElement.innerHTML = ''; // Clear previous content
    words.forEach((word) => {
        const wordElement = document.createElement('span');
        wordElement.textContent = word;
        wordElement.style.color = 'black'; // Style each word
        wordElement.style.marginRight = '15px'; // Space between words
        wordElement.style.display = 'inline-block'; // Ensure spacing is applied
        wordsElement.appendChild(wordElement);
    });
}

