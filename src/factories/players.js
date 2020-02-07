const Player = (name) => (
  {
    name,
    picked: [],
    play(target, board) {
      if (!this.picked.includes(target)) {
        board.receiveAttack(target);
        this.picked.push(target);
      }
    },
  }
);

const Computer = (() => {
  const picked = [];

  const pickNum = () => {
    const pickedNum = Math.floor(Math.random() * 100) + 1;
    if (picked.includes(pickedNum)) { pickNum(); }
    return pickedNum;
  };

  const play = (num, board) => {
    board.receiveAttack(num);
    picked.push(num);
  };
  return { pickNum, play };
})();

export { Player, Computer };