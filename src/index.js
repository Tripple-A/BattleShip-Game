import Ship from './factories/ships';
import Gameboard from './factories/gameboard';
import Battle from './DOM/DOM';
import { Player, Computer } from './factories/players';
import './style.css';

const gridContainer = document.getElementById('gridContainer');
const shipMaker = document.querySelector('.shipMaker');
const compBoard = Gameboard(100);
const { playerBoard } = Battle;
const player1 = Player('You');
const ship5 = Ship(5);
const ship4 = Ship(4);
const ship3 = Ship(3);
const ship2 = Ship(2);
const ship1 = Ship(1);
const append = (board, num, grid) => {
  if (board.receiveAttack(num)) {
    grid.classList.add('red');
  } else {
    grid.textContent = 'X';
  }
};

const start = () => {
  compBoard.place(ship5, 5, 'vertically');
  compBoard.place(ship4, 56, 'horizontally');
  compBoard.place(ship3, 71, 'vertically');
  compBoard.place(ship2, 98, 'horizontally');
  compBoard.place(ship1, 50, 'vertically');
  document.querySelectorAll('.gridders').forEach(grid => {
    grid.addEventListener('click', () => {
      const num = grid.id / 101;
      if (player1.play(num) && !Battle.over(playerBoard, compBoard, player1)) {
        append(compBoard, num, grid);
        Battle.disable();
      }
      const num2 = Computer.pickNum();
      if (Computer.play(num2) && !Battle.over(playerBoard, compBoard, player1)) {
        const grid = document.getElementById(`${num2}`);
        grid.classList.remove('green');
        grid.textContent = '';
        append(playerBoard, num2, grid);
        Battle.enable();
      }
    });
  });
};

const ready = () => {
  gridContainer.classList.add('no-display');
  document.querySelector('.ready').addEventListener('click', () => {
    Battle.createGrids(10, gridContainer, 'player');
    Battle.createShips(shipMaker);
    gridContainer.classList.remove('no-display');
    document.querySelector('.ready').classList.add('no-display');
  });
  document.querySelector('.start').addEventListener('click', () => {
    start();
    document.querySelector('.start').classList.add('no-display');
  });
};

ready();