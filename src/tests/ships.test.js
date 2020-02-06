import Ship from '../factories/ships';


test('creates a new ship', () => {
  const myShip = Ship(2);
  expect(myShip.length).toBe(2);
  expect(myShip.hit(40)).toBe(true);
  expect(myShip.posHit.includes(40)).toBe(true);
  expect(myShip.isSunk()).toBe(false);
  myShip.hit(50);
  expect(myShip.isSunk()).toBe(true);
  expect(myShip.hit(40)).toBe(false);
});