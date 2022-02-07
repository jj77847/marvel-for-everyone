const inquirer = require("inquirer");
const Character = require("./lib/Character");
const Game = require("./lib/Game");
const { getAllCharacters } = require("./services/superhero");
const { transformCharacters } = require("./utils");

const getCharacters = async (characterIds) => {
  const charactersFromApi = await getAllCharacters(characterIds);

  const transformedCharacters = transformCharacters(charactersFromApi);

  const characters = transformedCharacters.map(
    (character) => new Character(character)
  );

  return characters;
};

const generateAvengerChoices = (avengers) =>
  avengers.map((avenger) => ({
    name: avenger.name,
    value: avenger.id,
  }));

const init = async () => {
  // set my characters for the game
  const characters = await getCharacters([655, 659, 149, 176, 346]);

  // create a new game
  const game = new Game(characters);

  // choose a character
  const questions = [
    {
      type: "list",
      name: "avenger",
      message: "Choose your character:",
      choices: generateAvengerChoices(game.avengers),
    },
  ];

  const { avenger } = await inquirer.prompt(questions);

  game.setAvenger(avenger);

  // while (game.turns !== 0) {
  //   game.playTurn();
  // }
};

init();
