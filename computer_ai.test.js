import { initialize_computer_AI } from "./computer_ai.js";

test('computer get board', () => {
    const computer = initialize_computer_AI(5, 5);
    const board = computer.getComputer().boardGet();
    //computer.receiveAttack([0, 0]);
    console.log(board)
    expect(computer.receiveAttack([0, 0])).toEqual();
})