import axios from 'axios';

export const movieEndPoint = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
});
