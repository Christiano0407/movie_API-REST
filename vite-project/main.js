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
const categories = document.querySelector(`#categoriesPreview`);
const categoriesList = document.querySelector(`#idCategories`);

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
  try {
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
              <figure class="figure-img">
                <img id="idMovieImg"  class="movie-img" src="https://image.tmdb.org/t/p/w500/${image.poster_path}">
              </figure>
              <div class="movie-text">
                <h3 class="title">${image.title}</h3>
                <h3 class="paragraph">Calif: ${image.vote_average}</h3>
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
//*! >>> Call Trending <<< */
getTrendingMovies();

const getCategories = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY} `
    );
    const categoriesData = await res.json();
    console.log(categoriesData);
    console.log(categoriesData.genres[0].name);

    if (res.status === 200) {
      let idCategories = ` `;

      categoriesData.genres.forEach((cat) => {
        idCategories += `
          <div class = "categories-container">
            <button class="btnPlus-categories">
              <h3 class="categories-name">${cat.name}</h3>
            </button>
          </div>
          `;
      });
      /*  <h3 class="categories-id">${cat.id}</h3> */
      categoriesList.innerHTML = idCategories;
    }
  } catch (error) {
    console.log('Error in Categories!!');
  }
};

//*!=== Call Functions ===  */
getCategories();
