import './board.css';

function showBoard (row, column) {
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.classList.add("board-container");

    for (let i = 0; i < (row * column); i++) {
        const grid = document.createElement("div");
        grid.classList.add('grid');
        div.append(grid);
    }

    main.append(div);
}

export {showBoard};