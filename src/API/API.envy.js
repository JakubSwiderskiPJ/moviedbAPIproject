const ApiKey = `f3ee5d85c3a33b8437e40136ab986b03`;
const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`;
const searchByTitle = (...title) => `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${title}`;
const posterURL = (posterURL) => `https://image.tmdb.org/t/p/w500/${posterURL}`;
const filmData = (filmID) => `https://api.themoviedb.org/3/movie/${filmID}api_key=${ApiKey}&append_to_response=credits`;
const movieURL = `https://api.themoviedb.org/3/movie/550?api_key=${ApiKey}&callback`;


export { popularURL, searchByTitle, posterURL, filmData, movieURL }