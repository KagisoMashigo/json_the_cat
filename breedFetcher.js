const request = require('request');
//const breedSearch = process.argv[2];

const fetchBreedDescription = (breedSearch, callBack) => {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedSearch}`, (error, response, body) => {
    if (error) {
      return callBack(error, null);
    }
    const data = JSON.parse(body);
  
    if (!data[0]) {
      const noBreedErr = `Sorry there's no description for ${breedSearch}!`;
      return callBack(noBreedErr, null);
    } else if (data[0]) {
      const description = data[0].description; // putting this line here protects (in the sense that it will establish that it actually exists)
      return callBack(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };
