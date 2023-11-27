export default function shipPlacement (player, name, length, position, bool) {
    const div = document.querySelector(".board-container");
    const coor = player.makeShip(name, length, position, bool);
    const div_children = Array.from(div.children);
    if (coor != false) {
        for (let index = 0; index < coor.length; index++) {
            const x = coor[index][0];
            const y = coor[index][1];
            const axis = `${x}-${y}`;
            
            for (let child = 0; child < div_children.length; child++) {
                const id = div_children[child].getAttribute('id');
                if (id == axis) {
                    const div_child = document.getElementById(id);
                    div_child.style.backgroundColor = "green";
                    div_child.setAttribute('taken', "true");
                    break;
                }
            }
        }
    }
    return coor;
}