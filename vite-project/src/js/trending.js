//**TODO ====  === === Trending === === ==== */
import { API_KEY } from '../secret/secret';
//*! >>>> Endpoints & Query Parameters === API REST FETCH <<<< */
const API_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

//*! Variables  */
const idMoviesContainer = document.querySelector(`#idMoviesContainer`);

//** === Trending */
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
      let trends = ' ';

      data.results.forEach((image) => {
        trends += `
      <div class="movie-container">
          <div class="slider-trending">
              <figure class="figure-img">
                <img id="idMovieImg"  class="movie-img" src="https://image.tmdb.org/t/p/w500/${image.poster_path}">
              </figure>
              <div class="movie-text">
                <h3 class="title">${image.title}</h3>
                <span class="paragraph">Calif: ${image.vote_average}</span>
              </div>
          </div>
      </div>
      `;
      });
      /*  articleTrendingPreview.append(idMoviesContainer); */
      idMoviesContainer.innerHTML = trends;
    }
  } catch (error) {
    console.log('We Have Error!');
  }
};
