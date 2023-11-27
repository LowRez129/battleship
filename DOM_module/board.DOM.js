import { gameboardFactory } from '../battleship_module/gameboardFactory.js';
import { orientButton } from './orient_button.DOM.js';
import shipPlacement from './shipPlacement.DOM.js';
import './board.css';

function showBoard (row, column) {
    const player = gameboardFactory(row, column);
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.classList.add("board-container");
    
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
                    const node = document.getElementById(`${x + int}-${y}`);
                    if (node == null) { return };
                    if (node.getAttribute('taken') != "false") {return};
                    node.style.backgroundColor = "black";
                }
            });
            grid.addEventListener('mouseenter', () => {
                if (index == dock.length) {return};
                for (let int = 0; int < get_dock[1]; int++) {
                    const node = document.getElementById(`${x + int}-${y}`);
                    if (node == null) { return };                 
                    if (node.getAttribute('taken') != "false") {return};      
                    node.style.backgroundColor = "red";
                }
            })
            grid.addEventListener('click', () => {
                if (grid.getAttribute('taken') != "false" || index == (dock.length)) {return};
                const bool = shipPlacement(player, get_dock[0], get_dock[1], [x, y]);
                if (bool == false) {return};
                index++;
                get_dock = dock[index];
                console.log(player.boardGet());
            });
            div.append(grid);
        }
    }

    main.append(div, orientButton());
}

export {showBoard};