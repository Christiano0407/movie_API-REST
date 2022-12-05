//import './style.css';
//** === === Movie App === === */
//*! === Import === */
//import { API_KEY } from './src/secret/secret.js';
import { addNavigation } from './src/js/header.js';
import { getTrendingMovies } from './src/js/trending.js';
import { getCategories } from './src/js/categories.js';
import { genericMovies } from './src/js/genericList.js';
//import { upDetailImg } from './src/js/movieDetail.js';
//*! >>>> Endpoints & Query Parameters === API REST FETCH <<<< */
//*! ==> Variables <== */
const idNavBtn = document.querySelector('#idNavBtn');

//*! === === === Call Functions === === === *//
//*! === Location & Hash Navigation === */
//window.addEventListener(`hashchange`, () => console.log(location.hash));

const navigationEndpoint = () => {
  console.log({ location });

  if (location.hash.startsWith(`#homepage`)) {
    homePage();
  }

  if (location.hash.startsWith(`#trends`)) {
    console.log('Trending');
  } else {
    homePage();
  }

  if (location.hash.startsWith(`#genericMovies`)) {
    console.log(`#genericMovies`);
    genericMovies();
  } else {
    homePage();
  }

  if (location.hash.startsWith(`#movieDetail`)) {
    console.log(`DetailMovie`);
    //upDetailImg();
  } else {
    homePage();
  }
};
//** === HomePage */
const homePage = () => {
  console.log('#HomePage');
  getTrendingMovies();
  getCategories();
  idNavBtn.addEventListener('click', addNavigation);
};

//** === >> Add & Loaded ==> Hash Navigation & Location (False Router Express Js) << === */
window.addEventListener(`DOMContentLoaded`, navigationEndpoint, false);
window.addEventListener(`hashchange`, navigationEndpoint, false);
