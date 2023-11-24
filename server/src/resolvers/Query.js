const { getPopular } = require("../modules/movies");

async function movies(parent, args) {
  const data = await getPopular();
  console.log(data);

  return {
    page: 1,
    totalResults: 12,
    totalPage: 10,
    results: [
      {
        id: 1,
        title: "Spider-man",
        releaseDate: "Apr 23 2000",
        posterPath: "",
      },
    ],
  };
}

module.exports = {
  movies,
};
