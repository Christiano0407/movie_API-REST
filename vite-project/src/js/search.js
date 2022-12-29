//** === Import Key === */
import { API_KEY } from '../secret/secret.js';

//** === Page */
let pages = 1;

//** >= === API REST Search === <= */
const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&append_to_response=videos&language=en-US&page=${pages}&query=`;

//** === Variables ===  */
//const headerForm = document.querySelector(`#idHeaderForm`);
//const searchFormInput = document.querySelector(`#searchForm`);
/* const inputPlay = document.querySelector(`#idInput`); */
const searchBtn = document.querySelector(`#searchBtn`);
const input = document.querySelector(`#idInput`);
const navigation = document.querySelector(`#idNav`);
const categories = document.querySelector(`#categoriesPreview`);
const trending = document.querySelector(`#trendingPreview`);
const tvShow = document.querySelector(`#idSectionTv`);
const navBtn = document.querySelector(`#idNavBtn`);
const arrow = document.querySelector(`.arrow`);
const arrowHeader = document.querySelector(`.header-arrow`);
const generalList = document.querySelector(`#idGenericList`);
//let query;
let lastMovie;
let addSearch = ``;

//** === Intersection Observer && Lazy Loading (Attribute) === */
/*
 loading="Lazy"  (Image attribute)
*/
/* let observerButton = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        pages++;
        getSearch();
      }
    });
  },
  {
    rootMargin: `0px 0px 200px 0px`,
    threshold: 1.0,
  }
); */

//** === Display */
const noneSearch = () => {
  navigation.style.display = `flex`;
  navBtn.style.display = `none`;
  arrow.style.display = `flex`;
  arrowHeader.style.display = `flex`;
  categories.style.display = `none`;
  trending.style.display = 'none';
  tvShow.style.display = `none`;
  //generalList.classList.toggle(`active`);
  generalList.style.display = `grid`;
};
//** === Search Movies && Export General Function Search */
export const searchPlay = () => {
  //location.hash = `#search=` + inputPlay.value;
  noneSearch();

  let inputValue = input.value;
  console.log(inputValue);

  if (inputValue && inputValue.trim() !== '') {
    let query = API_SEARCH + inputValue;
    getSearch(query);
  } else {
    getSearch(API_SEARCH);
  }
};
searchBtn.addEventListener(`click`, searchPlay);

//** === Call API Search */}
const getSearch = async (API) => {
  try {
    const response = await fetch(API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const searchData = await response.json();
    //console.log(searchData.results);

    if (response.status === 200) {
      generalList.innerHTML = ``;
      //e.preventDefault();

      searchData.results.forEach((search) => {
        addSearch += `
        <div class="search__container  movie-container--loading">
          <figure class="search-figure">
            <img id="imgSearch" class="search-img" src="https://image.tmdb.org/t/p/w500/${search.poster_path}" 
              alt="${search.title}""
            >
          </figure>
        </div>
        `;
      });
      generalList.innerHTML = addSearch;

      const buttonPlus = document.createElement(`button`);
      buttonPlus.classList.add(`btn-page`);
      buttonPlus.textContent = `+`;

      generalList.appendChild(buttonPlus);

      const imgSearch = document.getElementById(`imgSearch`);
      imgSearch.setAttribute(`loading`, `lazy`);

      imgSearch.addEventListener(`error`, () => {
        imgSearch.setAttribute(`src`, `../img/cyborg-delete.png`);
      });
      /* buttonPlus.addEventListener(`click`, () => {
        console.log('Now');
        if (pages < 1000) {
          if (lastMovie) {
            observerButton.unobserve(lastMovie);
          }

          const moviesIntersection = document.querySelectorAll(
            `.genericList-container .search__container `
          );
          lastMovie = moviesIntersection[moviesIntersection.length - 1];
          observerButton.observe(lastMovie);
        }
      }); */
    }
  } catch (err) {
    console.log('We have error with search!!');
  }
};

const returnSearch = () => {
  arrow.style.display = `none`;
  //generalList.classList.toggle(`inactive`);
  generalList.style.display = 'none';
  //window.history.back();
  //history.back();
};
arrowHeader.addEventListener(`click`, returnSearch);
