//** === Variables ===  */
const headerForm = document.querySelector(`#idHeaderForm`);
const searchFormInput = document.querySelector(`#searchForm`);
/* const inputPlay = document.querySelector(`#idInput`); */
const searchBtn = document.querySelector(`#searchBtn`);
const navigation = document.querySelector(`#idNav`);
const categories = document.querySelector(`#categoriesPreview`);
const trending = document.querySelector(`#trendingPreview`);
const tvShow = document.querySelector(`#idSectionTv`);

const noneSearch = () => {
  navigation.style.display = `none`;
  categories.style.display = `none`;
  trending.style.display = 'none';
  tvShow.style.display = `none`;
};

export const searchPlay = () => {
  noneSearch();
  //location.hash = `#search=` + inputPlay.value;
};

searchBtn.addEventListener(`click`, searchPlay);
