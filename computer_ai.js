import { gameboardFactory } from "./gameboardFactory.js";

function initialize_computer_AI (row, column) {
    const computer = gameboardFactory(row, column);
    const ships = ['carrier_ai', 'battleship_ai', 'cruiser', 'submarine', 'destroyer'];
    const length = [5, 4, 3, 3, 2];
    for (let index = 0; index < ships.length; index++) {
        let invalid = true;
        while (invalid == true) {
            invalid = computer.makeShip(ships[index], length[index], getRandomCoordinate(row, column), randomBool());
        }
    }

    function getComputer () {return computer}

    return {getComputer};
}

function getRandomInt(max) { return Math.floor(Math.random() * max) };
function getRandomCoordinate (row, column) { return [getRandomInt(row), getRandomInt(column)] };
function randomBool () {
    const int = getRandomInt(2);
    const bool = (int == 0) ? true : false;
    return bool;
}

export {initialize_computer_AI};