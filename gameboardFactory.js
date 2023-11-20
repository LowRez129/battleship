import { shipFactory } from "./shipfactory";

function gameboardFactory (row, column) {
    const board = makeBoard(row, column);
    const ship_array = [];

    function boardGet () {return board};
    
    function makeBoard (x, y) {
        const makeboard = [];

        for (let num = 0; num < x; num++) {
            const array = [];
            for (let dgt = 0; dgt < y; dgt++) {
                array.push(false);
            };
            
            makeboard.push(array);
        };

        return makeboard;
    }

    function placeShip (name, placement) {
        //if (placement[0][1] != false) {return};
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

        for (let i = 0; i < ship_array.length; i++) {
            const ship = ship_array[i];
            if (ship.name == position_value) {
                ship.healthHit();
            };
        } 

        if (position_value != true) {board[x][y] = true};
    }

    function makeShip (value, length, start, vertical) {
        const ship = shipFactory(value, length, start, vertical);
        placeShip(ship.name, ship.position);
        ship_array.push(ship);
    }

    function shipGet () {return ship_array};

    return {boardGet, placeShip, receiveAttack, makeShip, shipGet};
}

export {gameboardFactory};