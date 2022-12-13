//** === Import Key === */
import { API_KEY } from '../secret/secret.js';
//** >= === API REST Search === <= */
const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;
//** === Variables ===  */
const headerForm = document.querySelector(`#idHeaderForm`);
const searchFormInput = document.querySelector(`#searchForm`);
/* const inputPlay = document.querySelector(`#idInput`); */
const searchBtn = document.querySelector(`#searchBtn`);
const navigation = document.querySelector(`#idNav`);
const categories = document.querySelector(`#categoriesPreview`);
const trending = document.querySelector(`#trendingPreview`);
const tvShow = document.querySelector(`#idSectionTv`);
const navBtn = document.querySelector(`#idNavBtn`);
const arrow = document.querySelector(`.arrow`);
const arrowHeader = document.querySelector(`.header-arrow`);

const noneSearch = () => {
  navigation.style.display = `flex`;
  navBtn.style.display = `none`;
  arrow.style.display = `flex`;
  arrowHeader.style.display = `flex`;
  categories.style.display = `none`;
  trending.style.display = 'none';
  tvShow.style.display = `none`;
};

export const searchPlay = () => {
  noneSearch();
  //location.hash = `#search=` + inputPlay.value;
};

searchBtn.addEventListener(`click`, searchPlay);

const returnSearch = () => {
  arrow.style.display = `none`;
};

arrowHeader.addEventListener(`click`, returnSearch);
