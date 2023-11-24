import { gameboardFactory} from "../battleship_module/gameboardFactory.js";
import { initialize_computer_AI } from "../battleship_module/computer_ai.js";
import {showBoard} from '../DOM_module/board.DOM.js'

const size = 10;
const player = gameboardFactory(size, size);
const computer = initialize_computer_AI(size, size);
showBoard(size, size);

console.log(computer.getComputer().boardGet());