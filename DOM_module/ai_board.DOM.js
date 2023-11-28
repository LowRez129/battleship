import { initialize_computer_AI } from "../battleship_module/computer_ai.js";
import { gameboardFactory } from "../battleship_module/gameboardFactory.js";
import './ai_board.DOM.css';

export default function aiBoard (object = initialize_computer_AI(), row, column, target = gameboardFactory()) {
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

            grid.addEventListener('click', () => {
                if (computer.boardGet()[x][y] == true) {return};
                grid.style.backgroundColor = "yellow";
                computer.receiveAttack([x, y]);
                if (board == ship_get[0].name) { grid.style.backgroundColor = "red" };
                if (board == ship_get[1].name) { grid.style.backgroundColor = "red" };
                if (board == ship_get[2].name) { grid.style.backgroundColor = "red" };
                if (board == ship_get[3].name) { grid.style.backgroundColor = "red" };
                if (board == ship_get[4].name) { grid.style.backgroundColor = "red" };
            });

            grid.addEventListener('click', () => {
                let auto_attack = object.giveAttack();
                let player_board = target.boardGet()[auto_attack[0]][auto_attack[1]];
                while (player_board == true) {
                    auto_attack = object.giveAttack();
                    player_board = target.boardGet()[auto_attack[0]][auto_attack[1]];
                }
                const player = document.getElementById(`${auto_attack[0]}-${auto_attack[1]}`);
                player.style.backgroundColor = "yellow";
                if (player_board != false) {player.style.backgroundColor = "red"};
                target.receiveAttack(auto_attack);
            });

            grid.style.backgroundColor = "black";
            div.append(grid);
        }
    }

    return div;
};
