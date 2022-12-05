//**TODO === === === Generic List === === ===  */
//import { API_KEY } from '../secret/secret';

//import { getTrendingMovies } from './trending';

//** === Variables === */
const genericList = document.querySelector(`#idGenericList`);
const trendingPreview = document.querySelector(`#trendingPreview`);
const categoriesPreview = document.querySelector(`#categoriesPreview`);
const btnGenericList = document.querySelector(`#idBtnTrending`);
const idArrow = document.querySelector(`#idArrow`);
const idMainArrow = document.querySelector(`#idMainArrow`);

export const genericMovies = () => {
  console.log(`GenericList`);

  if (idMainArrow && idArrow) {
    idArrow.classList.remove(`inactive`);
    idMainArrow.classList.remove(`inactive`);
  }
  genericList.classList.remove(`inactive`);
  trendingPreview.classList.add(`inactive`);
  categoriesPreview.classList.add(`inactive`);
};

btnGenericList.addEventListener(`click`, genericMovies);

const returnMovies = () => {
  console.log(`return`);
  idArrow.classList.add(`inactive`);
  idMainArrow.classList.add(`inactive`);
  genericList.classList.add(`inactive`);
  trendingPreview.classList.remove(`inactive`);
  categoriesPreview.classList.remove(`inactive`);
};

idMainArrow.addEventListener(`click`, returnMovies);
