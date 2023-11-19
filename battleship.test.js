import { shipFactory } from "./shipfactory";
import { gameboardFactory } from "./gameboardFactory";

test ('ship with health: x', () => {
    const destroyer = shipFactory(1);
    destroyer.healthHit();
    expect(destroyer.getHealth()).toEqual(0);
});

test ('ship with dead_status: x', () => {
    const destroyer = shipFactory(0);
    expect(destroyer.isSunk()).toEqual(true);
});

test ('ship with position: [x]', () => {
    const destroyer = shipFactory(3, [0, 0]);
    const destroyer_two = shipFactory(2, [0, 0], true)
    expect(destroyer.position).toEqual([[0, 0], [1, 0], [2, 0]]);
    expect(destroyer_two.position).toEqual([[0, 0], [0, 1]]);
})

test ('object with board: [x]', () => {
    const board = gameboardFactory(2, 3);
    expect(board.board[1]).toEqual([null, null, null]);
});