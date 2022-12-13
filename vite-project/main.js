//import './style.css';
//** === === Movie App === === */
//** === Import === */
//import { API_KEY } from './src/secret/secret.js';
import { addNavigation } from './src/js/header.js';
import { getTrendingMovies } from './src/js/trending.js';
import { getCategories } from './src/js/categories.js';
import { genericMovies } from './src/js/genericList.js';
import { movieDetailPage } from './src/js/movieDetail.js';
import { addSimilarMovies } from './src/js/movieDetail.js';
import { getTvShow } from './src/js/tvShow.js';
//*! ==> Variables <== */
const idNavBtn = document.querySelector('#idNavBtn');
const searchBtn = document.querySelector(`#searchBtn`);

/* const [_, categoryData] = location.hash(`=`);
const [categoryId, categoryName] = categoryData.split(`-`); */

//*! >>>> Endpoints & Query Parameters === API REST FETCH <<<< */
//** === Location & Hash Navigation === */
//window.addEventListener(`hashchange`, () => console.log(location.hash));
const navigationEndpoint = () => {
  //console.log({ location });

  /* if (location.hash.startsWith(`#`)) {
    location.hash = `#homepage`;
    homePage();
  } */

  if (location.hash.startsWith(`#homepage`)) {
    location.hash = `#homepage`;
    homePage();
  }

  if (location.hash.startsWith(`#search=`)) {
    console.log('#Search=');
  }

  if (location.hash.startsWith(`#categoriesMovies`)) {
    /*  location.hash = `#categoriesMovies`; */
    console.log('#CategoriesMovies');
    getCategories();
  }

  if (location.hash.startsWith(`#trends`)) {
    console.log('#Trending');
    //getTrendingMovies();
  }

  if (location.hash.startsWith(`#genericMovies`)) {
    console.log(`#genericMovies`);
    /* location.hash = `#genericMovies`; */
    genericMovies();
  }

  if (location.hash.startsWith(`#movieDetail`)) {
    console.log(`#DetailMovie`);
    movieDetailPage();
    addSimilarMovies();
  }

  if (location.hash.startsWith(`#tvShow`)) {
    console.log('#TvShow');
    getTvShow();
  }

  // >= Scroll Top Init <=
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

//** === HomePage */
const homePage = () => {
  console.log('#HomePage');
  /*  getTrendingMovies(); */
  getCategories();
  getTrendingMovies();
  idNavBtn.addEventListener('click', addNavigation);
  getTvShow();
};

searchBtn.addEventListener(`click`, () => {
  console.log('searchBtn');
  location.hash = `#search=`;
});

//** === >> Add & Loaded ==> Hash Navigation & Location (False Router Express Js) << === */
window.addEventListener(`DOMContentLoaded`, navigationEndpoint, false);
window.addEventListener(`hashchange`, navigationEndpoint, false);
