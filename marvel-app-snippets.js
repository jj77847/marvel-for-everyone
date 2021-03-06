marvel-api Build Status NPM version
Node.js wrapper for working with the official Marvel Comics API

Usage
Head over to developer.marvel.com and sign up/in to get your API keys. Install the module using npm and initialize an API client using the public and private API keys for your account.

var api = require('marvel-api');

var marvel = api.createClient({
publicKey: 'my-public-key'
, privateKey: 'my-private-key'
});
All methods return promises but also accept a callback.

..use the promise...

marvel.characters.findAll()
.then(console.log)
.fail(console.error)
.done();
..or use a callback.

marvel.characters.findAll(function(err, results) {
if (err) {
return console.error(err);
}

console.log(results);
});
Response Format
The response includes two properties, data which is the actual data returned from the request and meta which includes information about the result set such as the number of items retrieved, the total available items and the current offset into the data. This allows some visibility into the data so that you can make incremental requests to retrieve large datasets.

{
data: [
{
id: 43495,
digitalId: 28150,
...
},
{
id: 42566,
digitalId: 0,
...
}
],
meta: {
offset: 0,
limit: 20,
total: 2576,
count: 20
}
}
Example
Find Spider-Man's ID then the first 20 comics he's been in.

marvel.characters.findByName('spider-man')
.then(function(res) {
console.log('Found character ID', res.data[0].id);
return marvel.characters.comics(res.data[0].id);
})
.then(function(res) {
console.log('found %s comics of %s total', res.meta.count, res.meta.total);
console.log(res.data);
})
.fail(console.error)
.done();
API
the API is broken into pieces based on the data that will be worked with. Each object has methods for interacting with the specific bits of data for that object with some reasonable defaults.

Characters
#findAll
Fetch all characters within range. Accepts a limit and/or offset. Offset defaults to 0; limit defaults to 20 with a maximum of 100.

Fetch the first 20 characters.

marvel.characters.findAll()
.then(console.log)
.fail(console.error)
.done();
Fetch the first 5 characters.

marvel.characters.findAll(5)
.then(console.log)
.fail(console.error)
.done();
Fetch 3 characters starting at index 30.

marvel.characters.findAll(3, 30)
.then(console.log)
.fail(console.error)
.done();
#findByName
Fetch characters (returns an array) with the specified name.

marvel.characters.findByName('spider-man')
.then(console.log)
.fail(console.error)
.done();
#findNameStartsWith
Fetch characters with names that start with the specified string.

marvel.characters.findNameStartsWith('spi')
.then(console.log)
.fail(console.error)
.done();
#find
Fetch a single character with the specified ID.

marvel.characters.find('1011227')
.then(console.log)
.fail(console.error)
.done();
#comics
Fetch a list of comics filtered by character ID.

Optionally accepts a limit [20] and an offset [0].

marvel.characters.comics('1011334')
.then(console.log)
.fail(console.error)
.done();
#events
Fetch a list of events filtered by character ID.

Optionally accepts a limit [20] and an offset [0].

marvel.characters.events('1011334')
.then(console.log)
.fail(console.error)
.done();
#stories
Fetch stories filtered by character ID.

Optionally accepts a limit [20] and an offset [0].

marvel.characters.stories('1011334')
.then(console.log)
.fail(console.error)
.done();
Creators
#findAll
Fetch all creators within range. Accepts a limit and/or offset. Offset defaults to 0; limit defaults to 20 with a maximum of 100.

Fetch the first 20 creators.

marvel.creators.findAll()
.then(console.log)
.fail(console.error)
.done();
Fetch the first 5 creators.

marvel.creators.findAll(5)
.then(console.log)
.fail(console.error)
.done();
Fetch 3 creators starting at index 30.

marvel.creators.findAll(3, 30)
.then(console.log)
.fail(console.error)
.done();
#findByName
Fetch creators (returns an array) with the specified name. A first name, middle name (option) and last name (option) can be specified.

Fetch by first name only.

marvel.creators.findByName('austin')
.then(console.log)
.fail(console.error)
.done();
Fetch by first and middle name only.

marvel.creators.findByName('Goran', 'Sudzuka')
.then(console.log)
.fail(console.error)
.done();
Fetch by first, middle, and last name.

marvel.creators.findByName('Pat', 'Lee', '(X-Men/FF)')
.then(console.log)
.fail(console.error)
.done();
#find
Fetch a single creator with the specified ID.

marvel.creators.find('4110')
.then(console.log)
.fail(console.error)
.done();
#comics
Fetch a list of comics filtered by creator ID.

Optionally accepts a limit [20] and an offset [0].

marvel.creators.comics('4110')
.then(console.log)
.fail(console.error)
.done();
#stories
Fetch a list of creators filtered by story ID.

Optionally accepts a limit [20] and an offset [0].

marvel.creators.stories('4110')
.then(console.log)
.fail(console.error)
.done();
Comics
#findAll
Fetch all comics within range. Accepts a limit and/or offset. Offset defaults to 0; limit defaults to 20 with a maximum of 100.

Fetch the first 20 comics.

marvel.comics.findAll()
.then(console.log)
.fail(console.error)
.done();
Fetch the first 5 comics.

marvel.comics.findAll(5)
.then(console.log)
.fail(console.error)
.done();
Fetch 3 comics starting at index 30.

marvel.comics.findAll(3, 30)
.then(console.log)
.fail(console.error)
.done();
#find
Fetch a single comic with the specified ID.

marvel.comics.find('4110')
.then(console.log)
.fail(console.error)
.done();
#characters
Fetch a list of comics filtered by character ID.

Optionally accepts a limit [20] and an offset [0].

marvel.comics.characters('4110')
.then(console.log)
.fail(console.error)
.done();
#stories
Fetch a list of comics filtered by story ID.

Optionally accepts a limit [20] and an offset [0].

marvel.comics.stories('4110')
.then(console.log)
.fail(console.error)
.done();
Events
#findAll
Fetch all events within range. Accepts a limit and/or offset. Offset defaults to 0; limit defaults to 20 with a maximum of 100.

Fetch the first 20 events.

marvel.events.findAll()
.then(console.log)
.fail(console.error)
.done();
Fetch the first 5 events.

marvel.events.findAll(5)
.then(console.log)
.fail(console.error)
.done();
Fetch 3 events starting at index 30.

marvel.events.findAll(3, 30)
.then(console.log)
.fail(console.error)
.done();
#findByName
Fetch events (returns an array) with the specified name.

marvel.events.findByName('spider-man')
.then(console.log)
.fail(console.error)
.done();
#find
Fetch a single event with the specified ID.

marvel.events.find('1011227')
.then(console.log)
.fail(console.error)
.done();
#comics
Fetch a list of comics filtered by event ID.

Optionally accepts a limit [20] and an offset [0].

marvel.events.comics('1011334')
.then(console.log)
.fail(console.error)
.done();
#characters
Fetch a list of characters filtered by event ID.

Optionally accepts a limit [20] and an offset [0].

marvel.events.characters('1011334')
.then(console.log)
.fail(console.error)
.done();
#stories
Fetch stories filtered by event ID.

Optionally accepts a limit [20] and an offset [0].

marvel.events.stories('1011334')
.then(console.log)
.fail(console.error)
.done();
Series
#findAll
Fetch all series within range. Accepts a limit and/or offset. Offset defaults to 0; limit defaults to 20 with a maximum of 100.

Fetch the first 20 series.

marvel.series.findAll()
.then(console.log)
.fail(console.error)
.done();
Fetch the first 5 series.

marvel.series.findAll(5)
.then(console.log)
.fail(console.error)
.done();
Fetch 3 series starting at index 30.

marvel.series.findAll(3, 30)
.then(console.log)
.fail(console.error)
.done();
#findByTitle
Fetch series (returns an array) with the specified title.

marvel.series.findByTitle('spider-man')
.then(console.log)
.fail(console.error)
.done();
#find
Fetch a single series with the specified ID.

marvel.series.find('1011227')
.then(console.log)
.fail(console.error)
.done();
#comics
Fetch a list of comics filtered by series ID.

Optionally accepts a limit [20] and an offset [0].

marvel.series.comics('1011334')
.then(console.log)
.fail(console.error)
.done();
#events
Fetch a list of events filtered by series ID.

Optionally accepts a limit [20] and an offset [0].

marvel.series.events('1011334')
.then(console.log)
.fail(console.error)
.done();
#stories
Fetch stories filtered by series ID.

Optionally accepts a limit [20] and an offset [0].

marvel.series.stories('1011334')
.then(console.log)
.fail(console.error)
.done();
Stories
#findAll
Fetch all stories within range. Accepts a limit and/or offset. Offset defaults to 0; limit defaults to 20 with a maximum of 100.

Fetch the first 20 stories.

marvel.stories.findAll()
.then(console.log)
.fail(console.error)
.done();
Fetch the first 5 stories.

marvel.stories.findAll(5)
.then(console.log)
.fail(console.error)
.done();
Fetch 3 stories starting at index 30.

marvel.stories.findAll(3, 30)
.then(console.log)
.fail(console.error)
.done();
#find
Fetch a single comic with the specified ID.

marvel.stories.find('4110')
.then(console.log)
.fail(console.error)
.done();
#characters
Fetch a list of stories filtered by character ID.

Optionally accepts a limit [20] and an offset [0].

marvel.stories.characters('4110')
.then(console.log)
.fail(console.error)
.done();
#characters
Fetch a list of stories filtered by character ID.

Optionally accepts a limit [20] and an offset [0].

marvel.stories.characters('4110')
.then(console.log)
.fail(console.error)
.done();
