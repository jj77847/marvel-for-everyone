const Power = require("./Power");

class Character extends Power {
  constructor({ id, name, imageUrl, powerstats }) {
    super(powerstats);

    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }
}

module.exports = Character;
