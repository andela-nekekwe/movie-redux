import { API_KEY } from '../constants/Config';


export function constructMovieUrl(movieId) {
  return `https://api.themoviedb.org/${movieId}/movie/3?api_key=${API_KEY}&language=en-US`;
}

export function constructDiscoverUrl(movieId) {
  return `https://api.themoviedb.org/${movieId}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
}