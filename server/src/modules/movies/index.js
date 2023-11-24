const axios = require("axios");

const API_KEY = "8cd59d612cdfbb02cd5230c9576c4691";

const getPopular = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  return result.data;
};

module.exports = {
  getPopular,
};
