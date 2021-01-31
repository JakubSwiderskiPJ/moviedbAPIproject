const ApiKey = `f3ee5d85c3a33b8437e40136ab986b03`;
const searchByTitleURL = (query) => `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${query}`;
const genreURL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=f3ee5d85c3a33b8437e40136ab986b03`;
const crewURL = (id) =>`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f3ee5d85c3a33b8437e40136ab986b03`;
const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`;
const toPage = (id, title) => `https://www.themoviedb.org/movie/${id}-${title.toLowerCase()}`;
const poster = (path) => `https://image.tmdb.org/t/p/original/${path}`;
const galleryURL = (id) => `https://api.themoviedb.org/3/movie/${id}/images?api_key=f3ee5d85c3a33b8437e40136ab986b03`;
const videoURL = (id) => `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}`
const searchByGenre = (id) => `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=${id}`
const genresListURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}`

export { popularURL, searchByTitleURL, genreURL, crewURL, toPage, poster, galleryURL, videoURL, searchByGenre, genresListURL }