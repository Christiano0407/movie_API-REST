//** ===  === import ===  */
import { API_KEY } from '../secret/secret.js';
import { createSliderMovies } from '../utils/utils.js';
//** === API REST ===  */
const API_TV = `https://api.themoviedb.org/3/tv/popular/?api_key=${API_KEY}`;
//** === Variables === */
const sectionShowTv = document.querySelector(`#idSectionTv`);
//**TODO === ===  */
export const getTvShow = async () => {
  try {
    const res = await fetch(API_TV, {
      method: `GET`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const dataTv = await res.json();
    console.log(dataTv.results);
    //createSliderMovies(dataTv.results, sectionShowTv);
  } catch (error) {
    console.log('New Error, get Tv Show');
  }
};
