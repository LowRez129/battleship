import './board.css';
import {gameboardFactory} from '../battleship_module/gameboardFactory.js';

function showBoard (row, column) {
    const player = gameboardFactory(row, column);
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.classList.add("board-container");

    for (let x = 0; x < (row); x++) {
        for (let y = 0; y < column; y++) {
            const grid = document.createElement("div");
            let bool = false;

            grid.classList.add('grid');
            grid.dataset.coordinate = `${x}-${y}`;
            grid.addEventListener('click', () =>{
                bool = (bool == false) ? true : false;
                grid.style.backgroundColor = (bool == true) ? "green" : "red";
                player.makeShip("destroyer", 2, [x, y], true);
            });
            div.append(grid);
        }
    }

    main.append(div);
}

export {showBoard};