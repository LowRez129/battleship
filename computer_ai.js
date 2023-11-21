import { gameboardFactory } from "./gameboardFactory.js";

function initialize_computer_AI (row, column) {
    const computer = gameboardFactory(row, column);
    let invalid = true;
    while (invalid == true) {
        invalid = computer.makeShip('carrier_AI', 2, [getRandomInt(row), getRandomInt(column)], randomBool());
    }

    function getComputer () {return computer}

    return {getComputer};
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomBool () {
    const int = getRandomInt(2);
    const bool = (int == 0) ? true : false;
    return bool;
}

export {initialize_computer_AI};