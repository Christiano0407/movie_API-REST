//** === Import Key === */
import { API_KEY } from '../secret/secret.js';
//** >= === API REST Search === <= */
const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=marvel&language=en-US`;
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
const generalList = document.querySelector(`#idGenericList`);
const inputPlay = document.querySelector(`#idInput`);

let addSearch = ``;

const noneSearch = () => {
  navigation.style.display = `flex`;
  navBtn.style.display = `none`;
  arrow.style.display = `flex`;
  arrowHeader.style.display = `flex`;
  categories.style.display = `none`;
  trending.style.display = 'none';
  tvShow.style.display = `none`;
  //generalList.classList.toggle(`active`);
  generalList.style.display = `flex`;
};

export const searchPlay = () => {
  noneSearch();
  //location.hash = `#search=` + inputPlay.value;
  getSearch();
};

searchBtn.addEventListener(`click`, searchPlay);

//*! === Call API */}
const getSearch = async () => {
  try {
    const response = await fetch(API_SEARCH, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const searchData = await response.json();
    console.log(searchData.results);

    if (response.status === 200) {
      /*  generalList.innerHTML = ``; */

      searchData.results.forEach((search) => {
        addSearch += `
        <div class="search__container">
          <figure class="search-figure">
            <img class="search-img" src="https://image.tmdb.org/t/p/w500/${search.poster_path}" 
              alt="${search.title}""
            >
          </figure>
        </div>
        `;
      });
      generalList.innerHTML = addSearch;
    }
  } catch (err) {
    console.log('We have error with search!!');
  }
};

const returnSearch = () => {
  arrow.style.display = `none`;
  //generalList.classList.toggle(`inactive`);
  generalList.style.display = 'none';
};

arrowHeader.addEventListener(`click`, returnSearch);
