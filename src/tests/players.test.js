import { Player, Computer } from '../factories/players';
import Gameboard from '../factories/gameboard';

const player1 = Player('Jeff');
const playerBoard = Gameboard(100);
const enemyBoard = Gameboard(100);

test('can take a shot at enemy ship', () => {
  expect(player1.play(5, enemyBoard)).toBe(true);
  expect(player1.play(5, enemyBoard)).toBe(false);
});

test('can take a shot at a board position only once', () => {
  expect(player1.play(5, enemyBoard)).toBe(false);
});

test('Computer can pick a random number between 1 and 100 to take a shot', () => {
  expect(Computer.pickNum()).toBeGreaterThan(0);
  expect(Computer.pickNum()).toBeLessThan(101);
});

test('Computer will not pick a number it has picked before', () => {
  Computer.play(Computer.pickNum(), playerBoard);
  expect(Computer.picked.length).toEqual(1);
  expect(Computer.picked.includes(Computer.pickNum())).toBe(false);
});