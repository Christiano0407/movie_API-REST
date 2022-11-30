//import './style.css';
//** === === Movie App === === */
//*! === Import === */
import { API_KEY } from './src/secret/secret.js';

const navigationAdd = document.getElementById(`idNavAdd`);
const idNavBtn = document.querySelector('#idNavBtn');
//const iconBtn = document.querySelector(`#iconBtn`);
const trendingPreview = document.querySelector(`#trendingPreview`);
const articleTrendingPreview = document.querySelector(`#idTrendingPreview`);
const idMoviesContainer = document.querySelector(`#idMoviesContainer`);

//*? === >> BTN Burger Nav << === */
const addNavigation = () => {
  console.log('Click');

  if (navigationAdd) {
    /* navigationAdd.classList.remove(`inactive`);
    navigationAdd.classList.add(`active`); */
    navigationAdd.classList.toggle(`active`);
  }
};

idNavBtn.addEventListener('click', addNavigation);

//*? === >>> Fetch Trending Preview Movies <<< ===  */
//https://api.themoviedb.org/3/movie/550?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f

const getTrendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  //console.log(data);
  // console.log(data.results[0].id);

  if (response.status === 200) {
    let trends = ' ';

    data.results.forEach((image) => {
      trends += `
      <div class="movie-container">
          <div class="slider-trending">
              <figure>
                <img id="idMovieImg"  class="movie-img" src="https://image.tmdb.org/t/p/w500/${image.poster_path}">
              </figure>
              <h3 class="title">${image.title}</h3>;
              <h3 class="title">Popularity: ${image.popularity}</h3>;
          </div>
      </div>
      `;
    });
    /*  articleTrendingPreview.append(idMoviesContainer); */
    idMoviesContainer.innerHTML = trends;
  }
};

getTrendingMovies();
