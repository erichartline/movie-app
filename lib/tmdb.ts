const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const baseEndpoint = "https://api.themoviedb.org/3";

export const discoverEndpoint = `${baseEndpoint}/discover/movie?api_key=${API_KEY}`;
export const getMovieEndpoint = (id: string) =>
  `${baseEndpoint}/movie/${id}?api_key=${API_KEY}`;
export const getSearchEndpoint = (query: string) =>
  `${baseEndpoint}/search/movie?api_key=${API_KEY}&query=`;

export const ENDPOINTS = {
  popular: `${discoverEndpoint}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
};
