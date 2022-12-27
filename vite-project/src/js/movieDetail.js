//**TODO ==>  === Movie Detail === <==  */
//** ===  === import  */
import { API_KEY } from '../secret/secret.js';
//** === API Similar === */
let pages = 1;
const API_SIMILAR = `https://api.themoviedb.org/3/movie/${20}/similar?api_key=${API_KEY}&page=1&language=en-US&page=${pages}`;
//console.log(API_SIMILAR);

//*? === Variables */
const trendingPreview = document.querySelector(`#trendingPreview`);
const categoriesPreview = document.querySelector(`#categoriesPreview`);
const movieDetail = document.querySelector(`#movieDetail`);
const headerSection = document.querySelector(`#header`);
const navigation = document.querySelector(`#idNav`);
const formHeader = document.querySelector(`.header-form`);
const user = document.querySelector(`#idUserPlus`);
const idArrow = document.querySelector(`#idArrowPlus`);
const idMainArrow = document.querySelector(`#idMainArrowPlus`);
const btn = document.querySelector(`#idDetailBtn`);
//** === */
const relatedSimarMovies = document.querySelector(`#relatedSimarMovies`);
const movieSimilarRelated = document.querySelector(`#movieSimilarRelated`);
const titleMovieDetail = document.querySelector(`#idMovieDetail`);
/* console.log(relatedSimarMovies); */
//** === */
const movieDetailTitle = document.querySelector(`#idMovieDetail`);
const movieDetailScore = document.querySelector(`.movieDetail-score`);
const movieDetailDescription = document.querySelector(
  `.movieDetail-description`
);
const movieCategories = document.querySelector(`.categories-list`);

//** === */
let lastMovies;
let similar = ``;

//** === === >= Create Intersection Observer <= === === */
let observer = new IntersectionObserver(
  (entries, observer) => {
    console.log(entries);
    entries.forEach((entriesOne) => {
      if (entriesOne.isIntersecting) {
        pages++;
        addSimilarMovies();
      }
    });
  },
  {
    rootMargin: `0px 0px 200px 0px`,
    threshold: 1.0,
  }
);

export const movieDetailPage = () => {
  location.hash = `#movieDetail`;
  console.log('Movies Details');
  movieDetail.style.display = 'flex';
  headerSection.classList.add(`header-container__mobile`);
  categoriesPreview.style.display = 'none';
  trendingPreview.style.display = 'none';
  navigation.style.display = 'none';
  formHeader.style.display = 'none';
  user.style.display = 'none';
  idArrow.style.display = 'flex';
  idMainArrow.style.display = 'flex';
};

const returnMovies = () => {
  location.hash = `#homepage`;
  movieDetail.style.display = 'none';
  headerSection.classList.remove(`header-container__mobile`);
  categoriesPreview.style.display = 'flex';
  trendingPreview.style.display = 'flex';
  navigation.style.display = 'flex';
  formHeader.style.display = 'flex';
  user.style.display = 'none';
  idArrow.style.display = 'none';
  idMainArrow.style.display = 'none';
};

idMainArrow.addEventListener(`click`, returnMovies);

export const addSimilarMovies = async () => {
  try {
    const response = await fetch(API_SIMILAR, {
      method: `GET`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    //console.log(data);

    if (response.status === 200) {
      //titleMovieDetail.innerHTML = data.results.title;
      movieSimilarRelated.innerHTML = '';

      data.results.forEach((movie) => {
        similar += `
          <div class="movieSimilar-Card--container  movie-container--loading">
            <figure class="figure-similarMovie">
                <img
                  src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
                  class="movieSimilar-img"
                  alt="movies-Popular"
                />
            </figure>
            <div class="movieSimilar-content">
                <h2 class="similar-title">${movie.title}</h2>
                <p class="similar-text">${movie.overview}</p>
                <button id="btnSimilarMovie" class="btn-similar" >Learn More</button>
            </div>
          </div>
        `;
      });
      movieSimilarRelated.innerHTML = similar;

      if (pages < 1000) {
        if (lastMovies) {
          observer.unobserve(lastMovies);
        }
      }

      const IntersectionMovies = document.querySelectorAll(
        `.relatedMovies-scrollContainer, .movieSimilar-Card--container`
      );

      lastMovies = IntersectionMovies[IntersectionMovies.length - 1];
      observer.observe(lastMovies);
    }
  } catch (err) {
    console.log('Not Similar Movies');
  }
};

//addSimilarMovies();
