import { initialize_computer_AI } from "../battleship_module/computer_ai.js";
import './ai_board.DOM.css';

export default function aiBoard (object = initialize_computer_AI(), row, column) {
    const div = document.createElement('div');
    const computer = object.getComputer();
    div.classList.add('ai-board-container');
    div.style.setProperty('--x', `${row}`);
    div.style.setProperty('--y', `${column}`);

    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {
            const grid = document.createElement('div');
            const board = computer.boardGet()[x][y];
            const ship_get = computer.shipGet();
            grid.style.backgroundColor = "black";
            if (board == ship_get[0].name) { grid.style.backgroundColor = "green" };
            if (board == ship_get[1].name) { grid.style.backgroundColor = "green" };
            if (board == ship_get[2].name) { grid.style.backgroundColor = "green" };
            if (board == ship_get[3].name) { grid.style.backgroundColor = "green" };
            if (board == ship_get[4].name) { grid.style.backgroundColor = "green" };
            div.append(grid);
        }
    }

    return div;
};
