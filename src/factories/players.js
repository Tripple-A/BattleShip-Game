const Player = (name) => (
  {
    name,
    picked: [],
    play(target) {
      if (!this.picked.includes(target)) {
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
    return pickedNum;
  };

  const play = (num) => {
    if (picked.includes(num)) { pickNum(); }
    Computer.picked.push(num);
    return true;
  };
  return { pickNum, play, picked };
})();

export { Player, Computer };