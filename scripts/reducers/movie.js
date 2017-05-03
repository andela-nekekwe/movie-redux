import  * as types from '../constants/ActionTypes';

export default function roleReducer(state = [], action) {
  switch (action.type) {
    case types.MOVIE_SUCCESS:
      return [...state, Object.assign({}, action.movie)];
    default:
      return state;
  }
}
