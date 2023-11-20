import { shipFactory } from "./shipfactory";
import { gameboardFactory } from "./gameboardFactory";

test ('object', () => {
    const board = gameboardFactory(5, 5);
    board.makeShip('destroyer', 2, [0, 0], true);
    board.receiveAttack([0, 1]);
    console.log(board.boardGet());
    expect(board.boardGet()[0][0]).toEqual('destroyer');
});

test ('Check board for ships', () => {
    const board = gameboardFactory(5, 5);
    board.makeShip('destroyer', 2, [0, 0], true);
    const ship = board.shipGet()[0];
    board.receiveAttack([0, 1]);
    board.receiveAttack([0, 0]);
    console.log(board.boardGet());

    expect(ship.isSunk()).toEqual(true);
    expect(ship.getHealth()).toEqual(0);
    expect(ship.name).toEqual('destroyer');
}); 