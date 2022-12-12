//** === IMPORT === */
import { API_KEY } from '../secret/secret.js';
//*! >>>> Endpoints & Query Parameters === API REST FETCH <<<< */
let pages = 1;
const API_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY} `;
//const API_GENRE = `https://api.themoviedb.org/3/discover/movie/?with_genres=35&api_key=${API_KEY} `;
//const API_CHANGES = `https://api.themoviedb.org/3/movie/changes?api_key=${API_KEY}`;
const API_DISCOVER = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pages} `;
//** === Variables === */
const categoriesList = document.querySelector(`#idCategories`);
const trendingPreview = document.querySelector(`#trendingPreview`);
const categoriesPreview = document.querySelector(`#categoriesPreview`);
const headerSection = document.querySelector(`#header`);
const idGenericList = document.querySelector(`#idGenericList`);
/* const idGenericListDiscover = document.querySelector(`#idGenericList`); */
const idArrow = document.querySelector(`#idArrow`);
const idMainArrow = document.querySelector(`#idMainArrow`);
const arrowHeader = document.querySelector(`.arrow`);
const arrowHeaderSpan = document.querySelector(`.header-arrow`);
const headerCategories = document.querySelector(`.header-categorie`);
const headerForm = document.querySelector(`.header-form`);
const searchForm = document.querySelector(`#searchForm`);
const headerTitle = document.querySelector(`.header-title`);
const headerTitleCategoryView = document.querySelector(
  `.header-title--categoryView`
);
const idNavBtn = document.querySelector(`#idNavBtn`);
const logo = document.querySelector(`.logo`);
const headerUser = document.querySelector(`.header-user`);
let genericCategories;
let lastMovie;
let discoverMovies = ` `;

//** === >= Create Intersection Observer <= === */
let observer = new IntersectionObserver(
  (entries, observer) => {
    console.log(entries);
    entries.forEach((entriesPlus) => {
      if (entriesPlus.isIntersecting) {
        pages++;
        IDDiscover();
      }
    });
  },
  {
    rootMargin: `0px 0px 200px 0px`,
    threshold: 1.0,
  }
);

//**  === >>> Fetch Trending Preview Movies <<< ===  */
//https://api.themoviedb.org/3/movie/550?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f
/* const [_, categoryData] = location.hash(`=`);
const [categoryId, categoryName] = categoryData.split(`-`); */
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
        /*  location.hash = `#categoriesMovies=` + `${cat.id}-${cat.name}`; */
      });
      /*  <h3 class="categories-id">${cat.id}</h3> */
      categoriesList.innerHTML = idCategories;
      genericCategories = document.querySelectorAll(`#idBtnCategories`);
      //console.log(genericCategories);
      genericCategories.forEach((categories) => {
        categories.addEventListener(`click`, () => {
          addNewCategories();
          IDDiscover();
        });
      });
    }
  } catch (error) {
    console.log('Error in Categories!!');
  }
};

const addNewCategories = () => {
  location.hash = `#categoriesMovies`;
  trendingPreview.style.display = 'none';
  headerSection.style.display = 'flex';
  categoriesList.style.display = 'none';
  categoriesPreview.style.display = 'none';
  idGenericList.style.display = 'grid';
  if (idMainArrow && idArrow) {
    idArrow.classList.add(`inactive`);
    idMainArrow.classList.add(`inactive`);
  }
  if (arrowHeader && arrowHeaderSpan) {
    arrowHeader.classList.add(`active`);
    arrowHeaderSpan.classList.add(`active`);
  }
  headerCategories.classList.remove(`inactive`);
  headerTitle.classList.add(`active`);
  headerTitleCategoryView.classList.add(`active`);
  headerForm.style.display = 'none';
  searchForm.style.display = `none`;
  idNavBtn.style.display = 'none';
  logo.style.display = `none`;
  headerUser.style.display = `none`;
};

const returnArrow = () => {
  location.hash = `#homepage`;
  /* console.log(`arrow`); */
  trendingPreview.style.display = 'flex';
  headerSection.style.display = 'flex';
  categoriesList.style.display = 'flex';
  categoriesPreview.style.display = 'flex';
  idGenericList.style.display = 'none';
  if (arrowHeader && arrowHeaderSpan) {
    arrowHeader.classList.remove(`active`);
    arrowHeaderSpan.classList.remove(`active`);
  }
  headerCategories.classList.add(`inactive`);
  headerTitle.classList.remove(`active`);
  headerTitleCategoryView.classList.remove(`active`);
  headerForm.style.display = 'flex';
  searchForm.style.display = `flex`;
  idNavBtn.style.display = 'flex';
  logo.style.display = `flex`;
  headerUser.style.display = `flex`;
};

arrowHeaderSpan.addEventListener(`click`, returnArrow);

//** === ===  && Intersection Observer === === */

const IDDiscover = async () => {
  try {
    const response = await fetch(API_DISCOVER, {
      method: `GET`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const dataDiscover = await response.json();
    //console.log(dataDiscover.results);

    idGenericList.innerHTML = '';

    if (response.status === 200) {
      dataDiscover.results.forEach((discover) => {
        discoverMovies += ` 
        <div class="discover-movies">
          <figure class="discover-figure">
            <img 
            id="idImgDiscover" 
            class="img-discover"
            src="https://image.tmdb.org/t/p/w500/${discover.poster_path}"
            alt="${discover.title}"
            >
          </figure>
          <div class="discover-content">
            <h3 class="discover-moviesTitle">${discover.title}</h3>
          </div>
        </div>
        `;
        headerTitle.innerHTML = discover.title;
      });

      idGenericList.innerHTML = discoverMovies;
      if (pages < 1000) {
        if (lastMovie) {
          observer.unobserve(lastMovie);
        }

        const moviesIntersection = document.querySelectorAll(
          `.genericList-container .discover-movies`
        );
        //console.log(moviesIntersection);
        lastMovie = moviesIntersection[moviesIntersection.length - 1];
        //console.log(lastMovie);
        observer.observe(lastMovie);
      }
    }
  } catch (error) {
    console.log('Error Discover');
  }
};

/*
MOVIE
Action          28
Adventure       12
Animation       16
Comedy          35
Crime           80
Documentary     99
Drama           18
Family          10751
Fantasy         14
History         36
Horror          27
Music           10402
Mystery         9648
Romance         10749
Science Fiction 878
TV Movie        10770
Thriller        53
War             10752
Western         37
*/
