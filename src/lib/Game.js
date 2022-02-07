const moment = require("moment");

class Game {
  constructor(characters, { turns = 5, includeTimeStamps = true } = {}) {
    const [thanos, ...avengers] = characters;
    this.thanos = thanos;
    this.avengers = avengers;
    this.turns = turns;
    this.includeTimeStamps = includeTimeStamps;

    if (includeTimeStamps) {
      (this.startedAt = moment()), (this.endedAt = undefined);
    }
  }

  setAvenger(avengerId) {
    this.avenger = this.avengers.find((avenger) => avenger.id === avengerId);
  }

  getAvenger() {
    return this.avenger;
  }

  playTurn() {}
}

module.exports = Game;
