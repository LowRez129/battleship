import { gameboardFactory } from '../battleship_module/gameboardFactory.js';
import { orientButton } from './orient_button.DOM.js';
import shipPlacement from './shipPlacement.DOM.js';
import './board.css';

function showBoard (object, row, column) {
    const player = object;
    const container = document.createElement("div");
    const board_container = document.createElement("div");
    const button = orientButton();
    container.classList.add("container");
    board_container.classList.add("board-container");
    
    const dock = [["carrier", 5], ["battleship", 4], ["submarine", 3], ["destroyer", 2]];
    let index = 0;
    let get_dock = dock[index];

    for (let x = 0; x < (row); x++) {
        for (let y = 0; y < column; y++) {
            const grid = document.createElement("div");

            grid.classList.add('grid');
            grid.setAttribute('id', `${x}-${y}`);
            grid.setAttribute('taken', "false");
            grid.addEventListener('mouseleave', () => {
                if (index == dock.length) {return};
                for (let int = 0; int < get_dock[1]; int++) {
                    const horizontal = (button.value == "false") ? `${x + int}-${y}` : `${x}-${y + int}`;
                    const node = document.getElementById(horizontal);
                    if (node == null) { return };
                    if (node.getAttribute('taken') != "false") {return};
                    node.style.backgroundColor = "black";
                }
            });
            grid.addEventListener('mouseenter', () => {
                if (index == dock.length) {return};
                for (let int = 0; int < get_dock[1]; int++) {
                    const horizontal = (button.value == "false") ? `${x + int}-${y}` : `${x}-${y + int}`;
                    const node = document.getElementById(horizontal);
                    if (node == null) { return };                 
                    if (node.getAttribute('taken') != "false") {return};      
                    node.style.backgroundColor = "red";
                }
            })
            grid.addEventListener('click', () => {
                if (grid.getAttribute('taken') != "false" || index == (dock.length)) {return};
                const orientation = (button.value == "true") ? true : false;
                const bool = shipPlacement(player, get_dock[0], get_dock[1], [x, y], orientation);
                if (bool == false) {return};
                index++;
                get_dock = dock[index];
                console.log(player.boardGet());
            });
            board_container.append(grid);
        }
    }

    container.append(board_container, button);

    return container;
}

export {showBoard};