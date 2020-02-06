const Ship = (length) => (
  {
    length,
    coordinates: [],
    posHit: [],
    hit(num) {
      if (!this.posHit.includes(num)) {
        this.posHit.push(num);
        return true;
      } return false;
    },
    isSunk() {
      return this.posHit.length === length;
    },
  }
);

export default Ship;