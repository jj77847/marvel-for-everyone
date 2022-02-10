const api = require("marvel-api");

const marvel = api.createClient({
  publicKey: "d8c5ab67e26fc975e50148f6ca8696aa",

  privateKey: "d047b18cb71085142c82cd13ebad23df79df298e",
});

// find all
marvel.characters.findAll(function (err, results) {
  if (err) {
    return console.error(err);
  }

  console.log(results);
});

// spider-man example
marvel.characters
  .findByName("spider-man")
  .then(function (res) {
    console.log("Found character ID", res.data[0].id);
    return marvel.characters.comics(res.data[0].id);
  })
  .then(function (res) {
    console.log("found %s comics of %s total", res.meta.count, res.meta.total);
    console.log(res.data);
  })
  .fail(console.error)
  .done();

// single character example
marvel.characters
  .findByName("spider-man")
  .then(console.log)
  .fail(console.error)
  .done();

marvel.characters.find("1011227").then(console.log).fail(console.error).done();

marvel.characters
  .comics("1011334")
  .then(console.log)
  .fail(console.error)
  .done();
