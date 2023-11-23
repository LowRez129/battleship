import { gameboardFactory} from "../battleship_module/gameboardFactory.js";
import { initialize_computer_AI } from "../battleship_module/computer_ai.js";

const size = 10
const player = gameboardFactory(size, size);
const computer = initialize_computer_AI(size, size);
console.log(computer.getComputer().boardGet());