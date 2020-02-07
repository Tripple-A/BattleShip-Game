import { Player, Computer } from '../factories/players';


const player1 = Player('Jeff');


test('can take a shot at enemy ship', () => {
  expect(player1.play(5)).toBe(true);
});

test('can take a shot at a board position only once', () => {
  expect(player1.play(5)).toBe(false);
});

test('Computer can pick a random number between 1 and 100 to take a shot', () => {
  expect(Computer.pickNum()).toBeGreaterThan(0);
  expect(Computer.pickNum()).toBeLessThan(101);
});

test('Computer will not play a number it has picked before', () => {
  Computer.play(Computer.pickNum());
  expect(Computer.picked.length).toEqual(1);
});