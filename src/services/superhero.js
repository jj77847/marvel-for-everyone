const axios = require("axios");

const ACCESS_TOKEN = "10163747746225364";
const BASE_URL = "https://www.superheroapi.com/api.php";

const getCharacterData = (id) => axios.get(`${BASE_URL}/${ACCESS_TOKEN}/${id}`);

const getAllCharacters = async (characterIds) => {
  const promises = characterIds.map(getCharacterData);
  const responses = await Promise.all(promises);

  const characters = responses.map((response) => response.data);

  return characters;
};

module.exports = {
  getAllCharacters,
};
