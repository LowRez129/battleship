function shipFactory (length) {
    let health = length;
    let dead_status = false;

    function getHealth() {
        return health;
    }

    function healthHit () {
        if (health == 0) {
            dead_status = true;
            return;
        };
        health--;
    }

    return {getHealth, healthHit};
};

export {shipFactory};