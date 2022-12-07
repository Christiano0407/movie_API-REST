//** === IMPORT === */
import { API_KEY } from '../secret/secret.js';
//*! >>>> Endpoints & Query Parameters === API REST FETCH <<<< */
const API_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY} `;
//** === Variables === */
const categoriesList = document.querySelector(`#idCategories`);
const trendingPreview = document.querySelector(`#trendingPreview`);
const categoriesPreview = document.querySelector(`#categoriesPreview`);
const headerSection = document.querySelector(`#header`);
const idGenericList = document.querySelector(`#idGenericList`);
const idArrow = document.querySelector(`#idArrow`);
const idMainArrow = document.querySelector(`#idMainArrow`);
const headerCategories = document.querySelector(`.header-categorie`);
const headerForm = document.querySelector(`.header-form`);
const searchForm = document.querySelector(`#searchForm`);
const headerTitle = document.querySelector(`.header-title`);
const headerTitleCategoryView = document.querySelector(
  `.header-title--categoryView`
);
let genericCategories;

//**  === >>> Fetch Trending Preview Movies <<< ===  */
//https://api.themoviedb.org/3/movie/550?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f

//** === Categories */
export const getCategories = async () => {
  try {
    const res = await fetch(API_GENRES, {
      method: `GET`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const categoriesData = await res.json();
    //console.log(categoriesData);
    //console.log(categoriesData.genres[0].name);
    if (res.status === 200) {
      let idCategories = ` `;

      categoriesData.genres.forEach((cat) => {
        idCategories += `
          <div class = "categories-container">
            <button id="idBtnCategories"  class="btnPlus-categories">
              <h3 class="categories-name">${cat.name}</h3>
            </button>
          </div>
          `;
      });
      /*  <h3 class="categories-id">${cat.id}</h3> */
      categoriesList.innerHTML = idCategories;
      genericCategories = document.querySelectorAll(`#idBtnCategories`);
      //console.log(genericCategories);
      genericCategories.forEach((categories) => {
        categories.addEventListener(`click`, () => {
          console.log('Categories');
          addNewCategories();
        });
      });
    }
  } catch (error) {
    console.log('Error in Categories!!');
  }
};

const addNewCategories = () => {
  trendingPreview.style.display = 'none';
  headerSection.style.display = 'none';
  categoriesList.style.display = 'none';
  categoriesPreview.style.display = 'none';
  idGenericList.style.display = 'flex';
  if (idMainArrow && idArrow) {
    idArrow.classList.remove(`inactive`);
    idMainArrow.classList.remove(`inactive`);
  }
  headerCategories.classList.remove(`inactive`);
  headerTitle.classList.remove(`inactive`);
  headerTitleCategoryView.classList.remove(`inactive`);
  headerForm.style.display = 'flex';
  searchForm.style.display = `flex`;
};
