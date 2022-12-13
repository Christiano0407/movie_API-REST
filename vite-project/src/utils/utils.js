//** === IMPORT === */
//import { API_KEY } from '../secret/secret.js';
//**TODO === UTILS === */
const createMovies = (movies, container) => {
  container.innerHTML = '';

  movies.forEach((movie) => {
    const containerMovie = document.createElement(`div`);
    containerMovie.classList.add(`movie-container`);
    const imgMovie = document.createElement(`img`);
    imgMovie.classList.add(`movie-img`);
    imgMovie.setAttribute(`alt`, movie.title);
    imgMovie.setAttribute(
      `src`,
      `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    );

    containerMovie.appendChild(imgMovie);
    container.appendChild(containerMovie);
  });
};
//createMovies();
