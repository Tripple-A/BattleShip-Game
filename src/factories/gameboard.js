const Gameboard = (num) => (
  {
    grid: new Array(num),
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
        } return true;
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
        } return true;
      }
    },
  }
);

export default Gameboard;