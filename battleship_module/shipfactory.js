function shipFactory (value, length, start, vertical) {
    const name = value;
    const position = positionCreate(start, vertical);
    let health = length;
    let dead_status = (length != 0) ? false : true;
   
    function getHealth() {return health};
    function isSunk() {return dead_status};
    function healthHit () {
        if (dead_status == true) {return};

        health--;
        if (health == 0) {
            return dead_status = true;
        };
    }
    function positionCreate (start, vertical) {
        const array = [];
        const x = start[0];
        const y = start[1];
        
        for (let i = 0; i < length; i++) {
            if (vertical == true) {array.push([x, (y + i)])}
            else {array.push([(x + i), y])};
        }

        return array;
    }

    return {name, position, getHealth, healthHit, isSunk};
};

export {shipFactory};