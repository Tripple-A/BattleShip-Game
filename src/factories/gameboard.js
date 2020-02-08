const Gameboard = (num) => (
  {
    grid: new Array(num),
    placedShips: [],
    place(ship, startPos, direction) {
      if (direction === 'vertically') {
        for (let i = 0; i < ship.length; i += 1) {
          if (!this.grid[startPos + (i * 10)]) {
            this.grid[startPos + (i * 10)] = startPos + (i * 10);
            ship.coordinates.push(startPos + (i * 10));
          } else {
            ship.coordinates = [];
            return false;
          }
        } this.placedShips.push(ship); return true;
      }
      if (direction === 'horizontally') {
        for (let i = 0; i < ship.length; i += 1) {
          if (!this.grid[startPos + i]) {
            this.grid[startPos + i] = startPos + i;
            ship.coordinates.push(startPos + i);
          } else {
            ship.coordinates = [];
            return false;
          }
        } this.placedShips.push(ship); return true;
      } return false;
    },
    receiveAttack(num) {
      if (this.grid[num] === num) {
        let result = false;
        for (let i = 0; i < this.placedShips.length; i += 1) {
          if (this.placedShips[i].coordinates.includes(num)) {
            result = this.placedShips[i].hit(num);
            break;
          }
        } return result;
      } this.grid[num] = num; return false;
    },
    allSunk() {
      if (this.placedShips.length > 0) { return this.placedShips.every(ship => ship.isSunk()); }
      return false;
    },
  });

export default Gameboard;