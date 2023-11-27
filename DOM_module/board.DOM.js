import { gameboardFactory } from '../battleship_module/gameboardFactory.js';
import { orientButton } from './orient_button.DOM.js';
import shipPlacement from './shipPlacement.DOM.js';
import './board.css';

function showBoard (row, column) {
    const player = gameboardFactory(row, column);
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.classList.add("board-container");
    let index = 0;

    for (let x = 0; x < (row); x++) {
        for (let y = 0; y < column; y++) {
            const grid = document.createElement("div");
            const dock = [["carrier", 5], ["battleship", 4], ["submarine", 3], ["destroyer", 2]];
            let bool = false;

            grid.classList.add('grid');
            grid.setAttribute('id', `${x}-${y}`);
            grid.addEventListener('mouseleave', () => {
                for (let int = 0; int < 2; int++) {
                    const node = document.getElementById(`${x}-${y + int}`);
                    node.style.backgroundColor = "black";
                }
            });
            grid.addEventListener('mouseenter', () => {
                for (let int = 0; int < 2; int++) {
                    const node = document.getElementById(`${x}-${y + int}`);
                    node.style.backgroundColor = "red";
                }
            })
            grid.addEventListener('click', () => {
                const get_dock = dock[index];

                if (index == (dock.length)) {return};
                const bool = shipPlacement(player, get_dock[0], get_dock[1], [x, y]);
                if (bool == false) {return};
                index++;
            });
            div.append(grid);
        }
    }

    main.append(div, orientButton());
}

export {showBoard};