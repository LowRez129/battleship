import { shipFactory } from "./shipfactory";
import { gameboardFactory } from "./gameboardFactory";

test ('object with health: x', () => {
    const destroyer = shipFactory(5);
    destroyer.healthHit();
    expect(destroyer.getHealth()).toEqual(4);
});

test ('object with board: [x]', () => {
    const board = gameboardFactory(2, 3);
    expect(board.board[0]).toEqual([0, 1, 2]);
});