import Ship from './factories/ships';
import Gameboard from './factories/gameboard';
import Battle from './DOM/DOM';
import { Player, Computer } from './factories/players';
import './style.css';

const gridContainer = document.getElementById('gridContainer');
Battle.createGrids(10, gridContainer);
const shipMaker = document.querySelector('.shipMaker');
Battle.createShips(shipMaker);
const placer = (i) => {
console.log(i);
};