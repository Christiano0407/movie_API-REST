//** === IMPORT === */
//import { API_KEY } from '../secret/secret.js';

//** ==> === Intersection Observer && Lazy Loading form II === <==  */
const observeLazyLoader = new IntersectionObserver((entries, observer) => {
  //console.log(entries);
  entries.forEach((entry) => {
    // console.log(entry.target.setAttribute);
    if (entry.isIntersecting) {
      const URLLazy = entry.target.getAttribute(`data-src`);
      entry.target.setAttribute(`src`, URLLazy);
    }
  });
});

//**TODO === UTILS === */
const createMovies = (movies, container) => {
  container.innerHTML = '';

  movies.forEach((movie) => {
    const containerMovie = document.createElement(`div`);
    containerMovie.classList.add(`movie-container`);
    const imgMovie = document.createElement(`img`);
    imgMovie.classList.add(`movie-img`);
    imgMovie.setAttribute(`alt`, `${movie.title}`);
    /* imgMovie.setAttribute('loading', 'lazy'); */
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
export const createSliderMovies = (movies, container, lazyLoad = false) => {
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
      //`src`,
      lazyLoad ? `data-src` : `src`,
      `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    );

    imgMovie.addEventListener(`error`, () => {
      imgMovie.setAttribute(`src`, `../img/cyborg-delete.png`);
    });

    const movieBtn = document.createElement(`button`);
    movieBtn.classList.add(`movie-btn`);
    /*  movieBtn.textContent = 'Liked'; */
    movieBtn.addEventListener(`click`, (e) => {
      e.stopPropagation(); // evitar la propagacion de eventos
      movieBtn.classList.toggle(`movie-btn--liked`);
      // ==> LocalStorage
    });

    if (lazyLoad) {
      observeLazyLoader.observe(imgMovie);
    }

    /* const movieText = document.createElement(`div`);
    movieText.classList.add(`movie-text`);
    const movieTitle = document.createElement(`h3`);
    movieTitle.classList.add(`title`);
    movieTitle.setAttribute(`${movie.title}`); */
    containerSliderMovie.appendChild(slider);
    slider.append(figureImg, movieBtn);
    figureImg.appendChild(imgMovie);
    container.appendChild(containerSliderMovie);
  });
};
