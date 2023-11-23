import { gameboardFactory } from "./gameboardFactory";
import { initialize_computer_AI } from "./computer_ai";

test ('Check board for ships', () => {
    const size = 5;
    const player = gameboardFactory(size, size);
    const computer = initialize_computer_AI(size, size);
    player.makeShip('carrier', 5, [4, 0], true);
    player.receiveAttack(computer.giveAttack());
    computer.receiveAttack([0, 0]);
    console.log(player.boardGet());
    console.log(computer.getComputer().boardGet());

}); 