import Ship from '../factories/ships';
import Gameboard from '../factories/gameboard';

const myShip1 = Ship(3);
const myShip2 = Ship(3);
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
  expect(myboard.place(myShip1, 22, 'horizontally')).toBe(false);
});
