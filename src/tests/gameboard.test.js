import Ship from '../factories/ships';
import Gameboard from '../factories/gameboard';

const myShip1 = Ship(3);
const myShip2 = Ship(3);
const myShip3 = Ship(2);
const myboard = Gameboard(100);
test('can initialize a ship', () => {
  expect(myboard.grid.length).toBe(100);
});

test('can position a ship on gameboard vertically', () => {
  myboard.place(myShip1, 15, 'vertically');
  expect(myShip1.coordinates.includes(15)).toBe(true);
  expect(myShip1.coordinates.includes(25)).toBe(true);
  expect(myShip1.coordinates.includes(35)).toBe(true);
  expect(myboard.place(myShip2, 15, 'vertically')).toBe(false);
});

test('can position a ship on gameboard horizontally', () => {
  myboard.place(myShip2, 20, 'horizontally');
  expect(myShip2.coordinates.includes(20)).toBe(true);
  expect(myShip2.coordinates.includes(21)).toBe(true);
  expect(myShip2.coordinates.includes(22)).toBe(true);
  expect(myboard.grid[15]).toBe(15);
  expect(myboard.place(myShip3, 22, 'horizontally')).toBe(false);
});

test('it saves succesfully placed ships', () => {
  expect(myboard.placedShips.length).toBe(2);
  expect(myboard.placedShips[0]).toEqual(myShip1);
  expect(myboard.placedShips[1]).toEqual(myShip2);
});

test('it can receive an attack succesfully', () => {
  expect(myboard.receiveAttack(20)).toEqual(true);
  expect(myboard.receiveAttack(21)).toBe(true);
  expect(myboard.receiveAttack(60)).toBe(false);
  expect(myboard.grid[60]).toBe(60);
});

test('it can tell if all ships are sunk', () => {
  myboard.receiveAttack(20);
  myboard.receiveAttack(21);
  myboard.receiveAttack(22);
  expect(myShip2.isSunk()).toBe(true);
  expect(myboard.allSunk()).toBe(false);
  myboard.receiveAttack(15);
  myboard.receiveAttack(25);
  myboard.receiveAttack(35);
  expect(myShip1.isSunk()).toBe(true);
  expect(myboard.allSunk()).toBe(true);
});