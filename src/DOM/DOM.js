import Ship from '../factories/ships';
import Gameboard from '../factories/gameboard';

const Battle = (() => {
  const createGrids = (r, gridContainer, board) => {
    for (let i = 1; i <= r * r; i += 1) {
      const squares = document.createElement('div');
      squares.style.width = `${480 / r - 0.2}px`;
      squares.style.height = `${480 / r - 0.2}px`;
      if (board === 'player') {
        squares.className = 'grids';
        squares.id = i;
        squares.textContent = i;
      } else {
        squares.className = 'gridders';
        squares.id = 101 * i;
      }

      gridContainer.appendChild(squares);
    }
  };
  const playerBoard = Gameboard(100);
  const clear = () => {
    document.querySelectorAll('.grids').forEach(grid => {
      grid.textContent = '';
    });
  };
  const start = () => {
    if (playerBoard.placedShips.length === 5) {
      const compGrid = document.querySelector('.compGrid');
      document.querySelector('.shipMaker').classList.add('no-display');
      createGrids(10, compGrid, 'comp');
      compGrid.classList.remove('no-display');
      document.querySelector('.creation').classList.add('center');
      clear();
      document.querySelector('.start').classList.remove('no-display');
    } else {
      document.querySelector('.placement').classList.remove('no-display');
    }
  };
  const showShip = (ship) => {
    ship.coordinates.forEach(num => {
      document.getElementById(`${num}`).style.background = 'green';
    });
  };

  const check = (length, position, direction) => {
    if (direction === 'horizontally' && Math.ceil(position / 10) * 10 >= position + length - 1) { return true; }
    if (direction === 'vertically' && (length - 1) * 10 + position <= 100) { return true; }
    document.querySelector('.invalid').classList.remove('no-display');
    return false;
  };

  const disable = () => {
    document.querySelectorAll('.gridders').forEach(grid => {
      grid.classList.add('disabled');
    });
  };

  const placeShips = (i) => {
    const length = document.querySelector(`.length${i}`).value;
    const position = document.querySelector(`.position${i}`).value;
    const ship = Ship(parseInt(length, 10));
    const direction = document.querySelector(`.direction${i}`).value;
    if (check(parseInt(length, 10), parseInt(position, 10), direction) === true) {
      if (playerBoard.place(ship, parseInt(position, 10), direction)) {
        showShip(ship);
        document.querySelector(`.ship${i}`).classList.add('no-display');
      } else {
        document.querySelector('.created').classList.remove('no-display');
      }
    }
  };

  const createShips = (shipMaker) => {
    for (let i = 1; i < 6; i += 1) {
      const ship = document.createElement('div');
      ship.className = `ship${i}`;
      ship.innerHTML = `<form action="#">
      <label for="ship${i}">Ship ${i}</label> <br>
      <label> Length</label>
      <select class="length${i}">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label> Direction </label>
        <select class="direction${i}">
          <option value="horizontally">Horizontally</option>
          <option value="vertically">Vertically</option>
          </select>
        <input type="number" class="position${i}" placeholder="Start Position">
        <button class="place${i}">PLACE SHIP</button> <br><br>
  </form>`;
      shipMaker.appendChild(ship);
      document.querySelector(`.place${i}`).addEventListener('click', () => {
        document.querySelector('.created').classList.add('no-display');
        document.querySelector('.placement').classList.add('no-display');
        document.querySelector('.invalid').classList.add('no-display');
        placeShips(i);
      });
    }
    const btn = document.createElement('button');
    btn.textContent = 'Inform Opponent I am Readyyy';
    shipMaker.appendChild(btn);
    btn.onclick = start;
  };
  return {
    createGrids, createShips, placeShips, playerBoard, disable,
  };
})();

export default Battle;
