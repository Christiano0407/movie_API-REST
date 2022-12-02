//import './style.css';
//** === === Movie App === === */
//*! === Import === */
//import { API_KEY } from './src/secret/secret.js';
import { addNavigation } from './src/js/header.js';
import { getTrendingMovies } from './src/js/trending.js';
import { getCategories } from './src/js/categories.js';

//*! >>>> Endpoints & Query Parameters === API REST FETCH <<<< */
//*! ==> Variables <== */
const idNavBtn = document.querySelector('#idNavBtn');
//const iconBtn = document.querySelector(`#iconBtn`);
//const trendingPreview = document.querySelector(`#trendingPreview`);
//const articleTrendingPreview = document.querySelector(`#idTrendingPreview`);

//const categories = document.querySelector(`#categoriesPreview`);

//** === >> BTN Burger Nav << === */
idNavBtn.addEventListener('click', addNavigation);

//*! === === === Call Functions === === === */
//** === Trending */
getTrendingMovies();
//** === categories */
getCategories();

//*! === Location & Hash Navigation === */
//window.addEventListener(`hashchange`, () => console.log(location.hash));
