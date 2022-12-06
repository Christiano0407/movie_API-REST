//** === Movie Detail ===  */
//*! === import */
//import { API_KEY } from '../secret/secret.js';

//*? === Variables */
const trendingPreview = document.querySelector(`#trendingPreview`);
const categoriesPreview = document.querySelector(`#categoriesPreview`);
const movieDetail = document.querySelector(`#movieDetail`);
const headerSection = document.querySelector(`#header`);
const navigation = document.querySelector(`#idNav`);
const formHeader = document.querySelector(`.header-form`);
const user = document.querySelector(`#idUserPlus`);
const btn = document.querySelector(`#idDetailBtn`);

const movies = document.querySelectorAll(`#idMovieImg`);

let movie;

export const movieDetailPage = () => {
  console.log('Movies Details');
  movieDetail.style.display = 'flex';
  headerSection.classList.add(`header-container__mobile`);
  categoriesPreview.style.display = 'none';
  trendingPreview.style.display = 'none';
  navigation.style.display = 'none';
  formHeader.style.display = 'none';
  user.style.display = 'none';
};

export const add = () => {
  console.log('Add');
  //btn.addEventListener('click', console.log('Hello'));
};
