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
    imgMovie.setAttribute(`alt`, `${movie.title}`);
    imgMovie.setAttribute('loading', 'lazy');
    imgMovie.setAttribute(
      `src`,
      `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    );

    containerMovie.appendChild(imgMovie);
    container.appendChild(containerMovie);
  });
};
//createMovies();
//** <= === === Slider Movies and Tv Shows === === >= */
export const createSliderMovies = (movies, container) => {
  container.innerHTML = '';

  movies.forEach((movie) => {
    const containerSliderMovie = document.createElement(`div`);
    containerSliderMovie.classList.add(`movie-container`);
    const slider = document.createElement(`div`);
    slider.classList.add(`slider-trending`);
    const figureImg = document.createElement(`figure`);
    figureImg.classList.add(`figure-img`);
    const imgMovie = document.createElement(`img`);
    imgMovie.classList.add(`movie-img`);
    imgMovie.setAttribute(`alt`, movie.title);
    imgMovie.setAttribute(
      `src`,
      `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    );
    /* const movieText = document.createElement(`div`);
    movieText.classList.add(`movie-text`);
    const movieTitle = document.createElement(`h3`);
    movieTitle.classList.add(`title`);
    movieTitle.setAttribute(`${movie.title}`); */
    containerSliderMovie.appendChild(slider);
    slider.append(figureImg);
    figureImg.appendChild(imgMovie);
    container.appendChild(containerSliderMovie);
  });
};
