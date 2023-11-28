import { initialize_computer_AI } from "../battleship_module/computer_ai.js";

export default function aiBoard (object = initialize_computer_AI(), row, column) {
    const div = document.createElement('div');
    const board = object.getComputer().boardGet();

    div.style.display = "grid";
    div.style.gridTemplateRows = "repeat( 5, 8vh)";
    div.style.gridTemplateColumns = "repeat( 5, 8vh)";
    div.style.justifyContent = "center";
    div.style.gap = "1px";

    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {
            const grid = document.createElement('div');
            grid.style.backgroundColor = "black";
            div.append(grid);
        }
    }

    return div;
};
