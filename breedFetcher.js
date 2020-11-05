const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("Nothing came back, try something more... valid?\nYour Search returned: ");
      return callback(error, null);
    } else {
      const fetchedDesc = data[0].description;
      callback(null, fetchedDesc);
    }
  });
};

module.exports = { fetchBreedDescription };
