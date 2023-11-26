export default function makeBoard (x, y) {
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