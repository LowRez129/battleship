import { gameboardFactory} from "../battleship_module/gameboardFactory.js";
import { initialize_computer_AI } from "../battleship_module/computer_ai.js";
import {showBoard} from '../DOM_module/board.DOM.js';
import aiBoard from "../DOM_module/ai_board.DOM.js";
import './battleship.css';

const size = 5;
const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");
const player = gameboardFactory(size, size);
const computer = initialize_computer_AI(size, size);
const player_board = showBoard(player, size, size);
const computer_board = aiBoard(computer, size, size, player);


body.append(header, main, footer);
main.append(player_board, computer_board);
