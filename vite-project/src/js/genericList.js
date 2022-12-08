//**TODO === === === Generic List === === ===  */
import { API_KEY } from '../secret/secret.js';
//import { getTrendingMovies } from './trending';

const API_POPULAR = `https://api.themoviedb.org/3/movie/popular/?page=1&api_key=${API_KEY}`;
//** === Variables === */
const genericList = document.querySelector(`#idGenericList`);
const trendingPreview = document.querySelector(`#trendingPreview`);
const categoriesPreview = document.querySelector(`#categoriesPreview`);
const btnGenericList = document.querySelector(`#idBtnTrending`);
const idArrow = document.querySelector(`#idArrow`);
const idMainArrow = document.querySelector(`#idMainArrow`);
const movieContainer = document.querySelector(`.movie-container`);
const header = document.querySelector(`#header`);

export const genericMovies = () => {
  console.log(`GenericList`);
  location.hash = `#genericMovies`;
  getPopularMovies();
  header.style.display = 'none';
  if (idMainArrow && idArrow) {
    idArrow.classList.remove(`inactive`);
    idMainArrow.classList.remove(`inactive`);
  }
  genericList.classList.remove(`inactive`);
  movieContainer.classList.remove(`inactive`);
  trendingPreview.classList.add(`inactive`);
  categoriesPreview.classList.add(`inactive`);
};

btnGenericList.addEventListener(`click`, genericMovies);

const getPopularMovies = async () => {
  try {
    const response = await fetch(API_POPULAR, {
      method: `GET`,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const dataPopular = await response.json();
    let popularMoviesNew = ``;

    dataPopular.results.forEach((popular) => {
      popularMoviesNew += ` 
        <div class="moviesPopular-container">
            <img
              src="https://image.tmdb.org/t/p/w500/${popular.poster_path}"
              class="moviePopular-img"
              alt="movies-Popular"
            />
        </div>
    `;
    });
    genericList.innerHTML = popularMoviesNew;
  } catch (error) {
    console.log(`Error with Popular Movies`);
  }
};

const returnMovies = () => {
  console.log(`return`);
  idArrow.classList.add(`inactive`);
  idMainArrow.classList.add(`inactive`);
  genericList.classList.add(`inactive`);
  trendingPreview.classList.remove(`inactive`);
  categoriesPreview.classList.remove(`inactive`);
};

idMainArrow.addEventListener(`click`, returnMovies);
