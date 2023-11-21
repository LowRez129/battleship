import { initialize_computer_AI } from "./computer_ai.js";

test('computer get board', () => {
    const computer = initialize_computer_AI(5, 5);
    const board = computer.getComputer().boardGet();
    console.log(board)
    expect(board).toEqual();
})