import { shipFactory } from "./shipfactory.js";
import makeBoard from "./makeBoard.js";

function gameboardFactory (row, column) {
    const board = makeBoard(row, column);
    const ship_array = [];

    function boardGet () {return board};
    function placeShip (name, placement) {
        for (let i = 0; i < placement.length; i++) {
            const x = placement[i][0];
            const y = placement[i][1];
            board[x][y] = name;
        }
    };

    function receiveAttack (coordinate) {
        const x = coordinate[0];
        const y = coordinate[1];
        const position_value = board[x][y];

        if (position_value == true) {return false};

        for (let i = 0; i < ship_array.length; i++) {
            const ship = ship_array[i];
            if (ship.name == position_value) {
                ship.healthHit();
            };
        } 

        if (position_value != true) {return board[x][y] = true};
    }

    function makeShip (value, length, start, vertical) {
        const ship = shipFactory(value, length, start, vertical);
        for (let i = 0; i < ship.position.length; i++) {
            const ship_position = ship.position[i]
            const x = ship_position[0];
            const y = ship_position[1];
            const placement = (board[x] == undefined) ? null : board[x][y];
            
            if (placement != false) {return false};
        }
        placeShip(ship.name, ship.position);
        ship_array.push(ship);
        return ship_array[ship_array.length - 1].position;
    }

    function shipGet () {return ship_array};

    return {receiveAttack, makeShip, boardGet, shipGet};
}

export {gameboardFactory};