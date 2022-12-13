//**TODO ====  === === Trending === === ==== */
import { API_KEY } from '../secret/secret.js';
//import { genericMovies } from './genericList.js';
import { movieDetailPage } from './movieDetail';
//*! === === >>>> Endpoints & Query Parameters === API REST FETCH & Variables <<<< === === */
const API_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
const idMoviesContainer = document.querySelector(`#idTrendingPreview`);
let idMovie;

//** === Trending API CALL === */
export const getTrendingMovies = async () => {
  try {
    const response = await fetch(API_TRENDING, {
      method: `GET`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    //console.log(data);
    // console.log(data.results[0].id);
    if (response.status === 200) {
      let trends = '';

      data.results.forEach((image) => {
        trends += `
      <div class="movie-container">
          <div class="slider-trending">
              <figure class="figure-img">
                <img id="idMovieImg"  class="movie-img" src="https://image.tmdb.org/t/p/w500/${image.poster_path}">
              </figure>
              <div class="movie-text">
                <h3 class="title">${image.title}</h3>
              </div>
          </div>
      </div>
      `;
      });
      /*  articleTrendingPreview.append(idMoviesContainer); */
      idMoviesContainer.innerHTML = trends;
      idMovie = document.querySelectorAll(`#idMovieImg`);
      idMovie.forEach((movie) => {
        movie.addEventListener(`click`, () => {
          movieDetailPage();
        });
      });
      /* location.hash = `#homepage`; */
    }
  } catch (error) {
    console.log('We Have Error!');
  }
};
