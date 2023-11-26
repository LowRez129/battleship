import './board.css';

function showBoard (row, column) {
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.classList.add("board-container");

    for (let x = 0; x < (row); x++) {
        for (let y = 0; y < column; y++) {
            const grid = document.createElement("div");
            grid.classList.add('grid');
            grid.dataset.coordinate = `${x}-${y}`;
            let bool = false;
            grid.addEventListener('click', () =>{
                bool = (bool == false) ? true : false;
                grid.style.backgroundColor = (bool == true) ? "green" : "red"; 
            });

            div.append(grid);
        }
    }

    main.append(div);
}

export {showBoard};