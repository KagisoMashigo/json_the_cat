const request = require('request');
const breedSearch = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedSearch}`, (error, response, body) => {

  const data = JSON.parse(body);
  console.log("Cat Breed: ", data[0].description);

});
