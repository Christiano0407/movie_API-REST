//** === Movie Detail ===  */
//*! === import */
//import { API_KEY } from '../secret/secret.js';

//*? === Variables */
const trendingPreview = document.querySelector(`#trendingPreview`);
const categoriesPreview = document.querySelector(`#categoriesPreview`);
const movieDetail = document.querySelector(`#movieDetail`);

const idDetailBtn = document.querySelector(`#idDetailBtn`);

export const movieDetailPage = () => {
  console.log('Movies Details');
  // movieDetail.classList.remove(`inactive`);
  movieDetail.classList.add(`header-container__mobile`);
  categoriesPreview.classList.add(`inactive`);
  trendingPreview.classList.add(`inactive`);
};

/* idDetailBtn.addEventListener(`click`, movieDetailPage); */
