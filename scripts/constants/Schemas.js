import { Schema } from 'normalizr';

const movie = new Schema('movie');
const user = new Schema('user');

movie.define({
  user,
});


export const userSchema = user;
export const movieSchema = movie;







