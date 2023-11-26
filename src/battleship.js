import { gameboardFactory} from "../battleship_module/gameboardFactory.js";
import { initialize_computer_AI } from "../battleship_module/computer_ai.js";
import {showBoard} from '../DOM_module/board.DOM.js'
import './battleship.css';

const size = 10;
const player = gameboardFactory(size, size);
const computer = initialize_computer_AI(size, size);
const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

body.append(header, main, footer);
showBoard(size, size);

console.log(computer.getComputer().boardGet());