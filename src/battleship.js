import { gameboardFactory} from "../battleship_module/gameboardFactory.js";
import { initialize_computer_AI } from "../battleship_module/computer_ai.js";
import {showBoard} from '../DOM_module/board.DOM.js';
import './battleship.css';

const size = 10;
const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");
const player = gameboardFactory(size, size);

body.append(header, main, footer);
main.append(showBoard(player, size, size));