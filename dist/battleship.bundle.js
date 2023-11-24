/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./battleship_module/computer_ai.js":
/*!******************************************!*\
  !*** ./battleship_module/computer_ai.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize_computer_AI: () => (/* binding */ initialize_computer_AI)
/* harmony export */ });
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory.js */ "./battleship_module/gameboardFactory.js");


function initialize_computer_AI (row, column) {
    const computer = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)(row, column);
    const ships = ['carrier_ai', 'battleship_ai', 'cruiser_ai', 'submarine_ai', 'destroyer_ai'];
    const length = [5, 4, 3, 3, 2];

    for (let index = 0; index < ships.length; index++) {
        let invalid = true;
        while (invalid == true) {
            invalid = computer.makeShip(ships[index], length[index], getRandomCoordinate(row, column), randomBool());
        }
    }

    function receiveAttack (coordinate) { return computer.receiveAttack(coordinate) };
    function giveAttack () {return getRandomCoordinate(row, column) };
    function getComputer () {return computer}

    return {getComputer, receiveAttack, giveAttack};
}

function getRandomInt(max) { return Math.floor(Math.random() * max) };
function getRandomCoordinate (row, column) { return [getRandomInt(row), getRandomInt(column)] };
function randomBool () {
    const int = getRandomInt(2);
    const bool = (int == 0) ? true : false;
    return bool;
}



/***/ }),

/***/ "./battleship_module/gameboardFactory.js":
/*!***********************************************!*\
  !*** ./battleship_module/gameboardFactory.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameboardFactory: () => (/* binding */ gameboardFactory)
/* harmony export */ });
/* harmony import */ var _shipfactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipfactory.js */ "./battleship_module/shipfactory.js");


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

        if (position_value == true) {return false};

        for (let i = 0; i < ship_array.length; i++) {
            const ship = ship_array[i];
            if (ship.name == position_value) {
                ship.healthHit();
            };
        } 

        if (position_value != true) {return board[x][y] = true};
    }

    function makeShip (value, length, start, vertical) {
        const ship = (0,_shipfactory_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(value, length, start, vertical);
        for (let i = 0; i < ship.position.length; i++) {
            const ship_position = ship.position[i]
            const x = ship_position[0];
            const y = ship_position[1];
            const placement = (board[x] == undefined) ? null : board[x][y];
            
            if (placement != false) {return true};
        }
        placeShip(ship.name, ship.position);
        ship_array.push(ship);
        return ship_array[ship_array.length - 1].position;
    }

    function shipGet () {return ship_array};

    return {receiveAttack, makeShip, boardGet, shipGet};
}



/***/ }),

/***/ "./battleship_module/shipfactory.js":
/*!******************************************!*\
  !*** ./battleship_module/shipfactory.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shipFactory: () => (/* binding */ shipFactory)
/* harmony export */ });
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _battleship_module_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../battleship_module/gameboardFactory.js */ "./battleship_module/gameboardFactory.js");
/* harmony import */ var _battleship_module_computer_ai_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../battleship_module/computer_ai.js */ "./battleship_module/computer_ai.js");



const size = 10
const player = (0,_battleship_module_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)(size, size);
const computer = (0,_battleship_module_computer_ai_js__WEBPACK_IMPORTED_MODULE_1__.initialize_computer_AI)(size, size);
const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add("testing");
div.textContent = "TESTING";
body.textContent = "wtf";
//body.append(div);

console.log(computer.getComputer().boardGet());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGxlc2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEOztBQUV6RDtBQUNBLHFCQUFxQixzRUFBZ0I7QUFDckM7QUFDQTs7QUFFQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDLDRCQUE0QjtBQUM1Qiw2QkFBNkI7O0FBRTdCLFlBQVk7QUFDWjs7QUFFQSw2QkFBNkI7QUFDN0IsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0IrQzs7QUFFL0M7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQSw4QkFBOEIsU0FBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQyx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0EscUJBQXFCLDREQUFXO0FBQ2hDLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qjs7QUFFekIsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkI7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsbUNBQW1DO0FBQ25DLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkU7QUFDRTs7QUFFN0U7QUFDQSxlQUFlLHdGQUFnQjtBQUMvQixpQkFBaUIseUZBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9iYXR0bGVzaGlwX21vZHVsZS9jb21wdXRlcl9haS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vYmF0dGxlc2hpcF9tb2R1bGUvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vYmF0dGxlc2hpcF9tb2R1bGUvc2hpcGZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYmF0dGxlc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH0gZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeS5qc1wiO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplX2NvbXB1dGVyX0FJIChyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IGNvbXB1dGVyID0gZ2FtZWJvYXJkRmFjdG9yeShyb3csIGNvbHVtbik7XG4gICAgY29uc3Qgc2hpcHMgPSBbJ2NhcnJpZXJfYWknLCAnYmF0dGxlc2hpcF9haScsICdjcnVpc2VyX2FpJywgJ3N1Ym1hcmluZV9haScsICdkZXN0cm95ZXJfYWknXTtcbiAgICBjb25zdCBsZW5ndGggPSBbNSwgNCwgMywgMywgMl07XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGludmFsaWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaW52YWxpZCA9IGNvbXB1dGVyLm1ha2VTaGlwKHNoaXBzW2luZGV4XSwgbGVuZ3RoW2luZGV4XSwgZ2V0UmFuZG9tQ29vcmRpbmF0ZShyb3csIGNvbHVtbiksIHJhbmRvbUJvb2woKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrIChjb29yZGluYXRlKSB7IHJldHVybiBjb21wdXRlci5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIH07XG4gICAgZnVuY3Rpb24gZ2l2ZUF0dGFjayAoKSB7cmV0dXJuIGdldFJhbmRvbUNvb3JkaW5hdGUocm93LCBjb2x1bW4pIH07XG4gICAgZnVuY3Rpb24gZ2V0Q29tcHV0ZXIgKCkge3JldHVybiBjb21wdXRlcn1cblxuICAgIHJldHVybiB7Z2V0Q29tcHV0ZXIsIHJlY2VpdmVBdHRhY2ssIGdpdmVBdHRhY2t9O1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpIH07XG5mdW5jdGlvbiBnZXRSYW5kb21Db29yZGluYXRlIChyb3csIGNvbHVtbikgeyByZXR1cm4gW2dldFJhbmRvbUludChyb3cpLCBnZXRSYW5kb21JbnQoY29sdW1uKV0gfTtcbmZ1bmN0aW9uIHJhbmRvbUJvb2wgKCkge1xuICAgIGNvbnN0IGludCA9IGdldFJhbmRvbUludCgyKTtcbiAgICBjb25zdCBib29sID0gKGludCA9PSAwKSA/IHRydWUgOiBmYWxzZTtcbiAgICByZXR1cm4gYm9vbDtcbn1cblxuZXhwb3J0IHtpbml0aWFsaXplX2NvbXB1dGVyX0FJfTsiLCJpbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gXCIuL3NoaXBmYWN0b3J5LmpzXCI7XG5cbmZ1bmN0aW9uIGdhbWVib2FyZEZhY3RvcnkgKHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgYm9hcmQgPSBtYWtlQm9hcmQocm93LCBjb2x1bW4pO1xuICAgIGNvbnN0IHNoaXBfYXJyYXkgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGJvYXJkR2V0ICgpIHtyZXR1cm4gYm9hcmR9O1xuICAgIFxuICAgIGZ1bmN0aW9uIG1ha2VCb2FyZCAoeCwgeSkge1xuICAgICAgICBjb25zdCBtYWtlYm9hcmQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBudW0gPSAwOyBudW0gPCB4OyBudW0rKykge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGRndCA9IDA7IGRndCA8IHk7IGRndCsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChmYWxzZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtYWtlYm9hcmQucHVzaChhcnJheSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG1ha2Vib2FyZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAgKG5hbWUsIHBsYWNlbWVudCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYWNlbWVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeCA9IHBsYWNlbWVudFtpXVswXTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwbGFjZW1lbnRbaV1bMV07XG4gICAgICAgICAgICBib2FyZFt4XVt5XSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayAoY29vcmRpbmF0ZSkge1xuICAgICAgICBjb25zdCB4ID0gY29vcmRpbmF0ZVswXTtcbiAgICAgICAgY29uc3QgeSA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uX3ZhbHVlID0gYm9hcmRbeF1beV07XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uX3ZhbHVlID09IHRydWUpIHtyZXR1cm4gZmFsc2V9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcF9hcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHNoaXBfYXJyYXlbaV07XG4gICAgICAgICAgICBpZiAoc2hpcC5uYW1lID09IHBvc2l0aW9uX3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2hpcC5oZWFsdGhIaXQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYgKHBvc2l0aW9uX3ZhbHVlICE9IHRydWUpIHtyZXR1cm4gYm9hcmRbeF1beV0gPSB0cnVlfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlU2hpcCAodmFsdWUsIGxlbmd0aCwgc3RhcnQsIHZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwRmFjdG9yeSh2YWx1ZSwgbGVuZ3RoLCBzdGFydCwgdmVydGljYWwpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAucG9zaXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBfcG9zaXRpb24gPSBzaGlwLnBvc2l0aW9uW2ldXG4gICAgICAgICAgICBjb25zdCB4ID0gc2hpcF9wb3NpdGlvblswXTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBzaGlwX3Bvc2l0aW9uWzFdO1xuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gKGJvYXJkW3hdID09IHVuZGVmaW5lZCkgPyBudWxsIDogYm9hcmRbeF1beV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChwbGFjZW1lbnQgIT0gZmFsc2UpIHtyZXR1cm4gdHJ1ZX07XG4gICAgICAgIH1cbiAgICAgICAgcGxhY2VTaGlwKHNoaXAubmFtZSwgc2hpcC5wb3NpdGlvbik7XG4gICAgICAgIHNoaXBfYXJyYXkucHVzaChzaGlwKTtcbiAgICAgICAgcmV0dXJuIHNoaXBfYXJyYXlbc2hpcF9hcnJheS5sZW5ndGggLSAxXS5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaGlwR2V0ICgpIHtyZXR1cm4gc2hpcF9hcnJheX07XG5cbiAgICByZXR1cm4ge3JlY2VpdmVBdHRhY2ssIG1ha2VTaGlwLCBib2FyZEdldCwgc2hpcEdldH07XG59XG5cbmV4cG9ydCB7Z2FtZWJvYXJkRmFjdG9yeX07IiwiZnVuY3Rpb24gc2hpcEZhY3RvcnkgKHZhbHVlLCBsZW5ndGgsIHN0YXJ0LCB2ZXJ0aWNhbCkge1xuICAgIGNvbnN0IG5hbWUgPSB2YWx1ZTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBvc2l0aW9uQ3JlYXRlKHN0YXJ0LCB2ZXJ0aWNhbCk7XG4gICAgbGV0IGhlYWx0aCA9IGxlbmd0aDtcbiAgICBsZXQgZGVhZF9zdGF0dXMgPSAobGVuZ3RoICE9IDApID8gZmFsc2UgOiB0cnVlO1xuICAgXG4gICAgZnVuY3Rpb24gZ2V0SGVhbHRoKCkge3JldHVybiBoZWFsdGh9O1xuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtyZXR1cm4gZGVhZF9zdGF0dXN9O1xuICAgIGZ1bmN0aW9uIGhlYWx0aEhpdCAoKSB7XG4gICAgICAgIGlmIChkZWFkX3N0YXR1cyA9PSB0cnVlKSB7cmV0dXJufTtcblxuICAgICAgICBoZWFsdGgtLTtcbiAgICAgICAgaWYgKGhlYWx0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVhZF9zdGF0dXMgPSB0cnVlO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb3NpdGlvbkNyZWF0ZSAoc3RhcnQsIHZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgICAgIGNvbnN0IHggPSBzdGFydFswXTtcbiAgICAgICAgY29uc3QgeSA9IHN0YXJ0WzFdO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHZlcnRpY2FsID09IHRydWUpIHthcnJheS5wdXNoKFt4LCAoeSArIGkpXSl9XG4gICAgICAgICAgICBlbHNlIHthcnJheS5wdXNoKFsoeCArIGkpLCB5XSl9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIHJldHVybiB7bmFtZSwgcG9zaXRpb24sIGdldEhlYWx0aCwgaGVhbHRoSGl0LCBpc1N1bmt9O1xufTtcblxuZXhwb3J0IHtzaGlwRmFjdG9yeX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5fSBmcm9tIFwiLi4vYmF0dGxlc2hpcF9tb2R1bGUvZ2FtZWJvYXJkRmFjdG9yeS5qc1wiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZV9jb21wdXRlcl9BSSB9IGZyb20gXCIuLi9iYXR0bGVzaGlwX21vZHVsZS9jb21wdXRlcl9haS5qc1wiO1xuXG5jb25zdCBzaXplID0gMTBcbmNvbnN0IHBsYXllciA9IGdhbWVib2FyZEZhY3Rvcnkoc2l6ZSwgc2l6ZSk7XG5jb25zdCBjb21wdXRlciA9IGluaXRpYWxpemVfY29tcHV0ZXJfQUkoc2l6ZSwgc2l6ZSk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXN0aW5nXCIpO1xuZGl2LnRleHRDb250ZW50ID0gXCJURVNUSU5HXCI7XG5ib2R5LnRleHRDb250ZW50ID0gXCJ3dGZcIjtcbi8vYm9keS5hcHBlbmQoZGl2KTtcblxuY29uc29sZS5sb2coY29tcHV0ZXIuZ2V0Q29tcHV0ZXIoKS5ib2FyZEdldCgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=