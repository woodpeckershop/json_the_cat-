const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) {
      callback(err,null);
      return;
    }
    // if (response.status !== 200) {
    //   callback(new Error(`Got status ${response.status}`), null);
    // }
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null,data[0].description);
    } else {
      callback('The requested breed is not found', null);
      // callback(new Error("The requested breed is not found"), null);
    }
  });
};

// module.exports = { fetchBreedDescription }
module.exports.fetchBreedDescription = fetchBreedDescription;

