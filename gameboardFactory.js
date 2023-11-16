function gameboardFactory (row, column) {
    const board = makeBoard(row, column);
    
    function makeBoard (x, y) {
        const makeboard = [];

        for (let num = 0; num < x; num++) {
            const array = [];
            for (let dgt = 0; dgt < y; dgt++) {
                array.push(dgt);
            };
            
            makeboard.push(array);
        };

        return makeboard;
    }

    return {board};
}

export {gameboardFactory};