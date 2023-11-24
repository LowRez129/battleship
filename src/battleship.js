import { gameboardFactory} from "../battleship_module/gameboardFactory.js";
import { initialize_computer_AI } from "../battleship_module/computer_ai.js";
import './style.css';

const size = 10
const player = gameboardFactory(size, size);
const computer = initialize_computer_AI(size, size);
const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add("test");
div.textContent = "TESTING";
body.append(div);

console.log(computer.getComputer().boardGet());