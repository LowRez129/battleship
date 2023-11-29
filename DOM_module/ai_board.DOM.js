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

            grid.addEventListener('click', () => {
                const board_container = document.getElementById('board-container');
                if (board_container.getAttribute('ready') == "false") {return};
                if (computer.boardGet()[x][y] == true) {return};
                computer.receiveAttack([x, y]);
                if (board != false) { grid.style.backgroundColor = "red" }
                else {grid.style.backgroundColor = "yellow"};

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
