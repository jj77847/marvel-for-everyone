const transformCharacters = (characters) =>
  characters.map((character) => ({
    id: character.id,
    name: character.name,
    imageUrl: character?.image?.url || "https://via.placeholder.com/300",
    powerstats: character.powerstats,
  }));

module.exports = {
  transformCharacters,
};
