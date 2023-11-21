import { shipFactory } from "./shipfactory";
import { gameboardFactory } from "./gameboardFactory";

test ('Check board for ships', () => {
    const board = gameboardFactory(5, 5);
    board.makeShip('destroyer', 2, [0, 0], true);
    const ship = board.shipGet()[0];
    board.receiveAttack([0, 1]);
    board.receiveAttack([0, 0]);
    const test = board.makeShip('test', 2, [1, 9], true)

    console.log(board.boardGet());

    expect(test).toEqual('Invalid');
    expect(ship.isSunk()).toEqual(true);
    expect(ship.name).toEqual('destroyer');
}); 