import { gameboardFactory } from "./gameboardFactory";
import { initialize_computer_AI } from "./computer_ai";

const size = 10;
const player = gameboardFactory(size, size);
const computer = initialize_computer_AI(size, size);