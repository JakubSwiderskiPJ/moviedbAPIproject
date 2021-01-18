const ApiKey = `f3ee5d85c3a33b8437e40136ab986b03`;
const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`;
const searchByTitle = (...title) => `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${title.join('+')}`;

export { popularURL, searchByTitle }