import './board.css';

function showBoard (row, column) {
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.classList.add("board-container");
    div.style.display = "grid";
    div.style.gridTemplateRows = `repeat(${row}, auto)`;
    div.style.gridTemplateColumns = `repeat(${column}, auto)`;
    
    for (let i = 0; i < row; i++) {
        const row = document.createElement("div");
        for (let j = 0; j < column; j++) {
            const column = document.createElement("div");
            column.classList.add('test');
            column.textContent = "TESTING";
            column.style.background = "black";
            column.style.border = "solid red";
            row.append(column);
        }
        div.append(row);
    }

    main.append(div);
}

export {showBoard};