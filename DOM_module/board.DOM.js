import './style.css';

function showBoard (row, column) {
    const body = document.querySelector("body");
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

    body.append(div);
}

export {showBoard};