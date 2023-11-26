import { gameboardFactory } from '../battleship_module/gameboardFactory.js';
import { orientButton } from './orient_button.DOM.js';
import shipPlacement from './shipPlacement.DOM.js';
import './board.css';

function showBoard (row, column) {
    const player = gameboardFactory(row, column);
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.classList.add("board-container");

    for (let x = 0; x < (row); x++) {
        for (let y = 0; y < column; y++) {
            const grid = document.createElement("div");
            //let bool = false;

            grid.classList.add('grid');
            grid.setAttribute('id', `${x}-${y}`);
            grid.addEventListener('click', () => {
                //bool = (bool == false) ? true : false;
                //grid.style.backgroundColor = (bool == true) ? "green" : "red";
                shipPlacement(player, x, y);
            });
            div.append(grid);
        }
    }

    main.append(div, orientButton());
}

export {showBoard};