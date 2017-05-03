import * as types from '../constants/ActionTypes';
import { movieSchema } from '../constants/Schemas';
import { GENRES_MAP } from '../constants/MovieConstants';
import { constructMovieUrl } from '../utils/MovieUtils';


export function movieSuccess(movie) {
  return {
    type: types.MOVIE_SUCCESS,
    movie
  };
}


export function fetchMovie(movieUrl, dispatch) {
  return fetch(movieUrl, {
    method: 'GET'
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((movie) => {
      dispatch(movieSuccess(movie));
    })
    .catch((error) => {
      throw error;
    });
}

export function getMovies() {
  return () => {
    const movieId = 3;
    const movieUrl = constructMovieUrl(movieId);
    fetchMovie(movieUrl);
  };
}



