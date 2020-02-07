const Player = (name) => (
  {
    name,
    picked: [],
    play(target, board) {
      if (!this.picked.includes(target)) {
        board.receiveAttack(target);
        this.picked.push(target);
        return true;
      } return false;
    },
  }
);

const Computer = (() => {
  const picked = [];

  const pickNum = () => {
    const pickedNum = Math.floor(Math.random() * 100) + 1;
    if (Computer.picked.includes(pickedNum)) {
      pickNum();
    } else { return pickedNum; }
  };

  const play = (num, board) => {
    board.receiveAttack(num);
    Computer.picked.push(num);
  };
  return { pickNum, play, picked };
})();

export { Player, Computer };