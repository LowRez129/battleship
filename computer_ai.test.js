import { initialize_computer_AI } from "./computer_ai.js";

test('computer get board', () => {
    const computer = initialize_computer_AI(10, 10);
    const board = computer.getComputer().boardGet();
    console.log(board, computer.getComputer().shipGet())
})