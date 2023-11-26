import { gameboardFactory } from '../battleship_module/gameboardFactory.js';
import { orientButton } from './orient_button.DOM.js';
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
                const coor = player.makeShip("destroyer", 2, [x, y]);
                const div_children = Array.from(div.children);
                if (coor != false) {
                    for (let index = 0; index < coor.length; index++) {
                        const x = coor[index][0];
                        const y = coor[index][1];
                        const axis = `${x}-${y}`;
                        
                        for (let child = 0; child < div_children.length; child++) {
                            const id = div_children[child].getAttribute('id');
                            if (id == axis) {
                                const div_child = document.getElementById(id);
                                div_child.style.backgroundColor = "green";
                                break;
                            }
                        }
                    }
                }
            });
            div.append(grid);
        }
    }

    main.append(div, orientButton());
}

export {showBoard};