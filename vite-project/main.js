//import './style.css';
//** === === Movie App === === */
//*! === Import === */
//import { API_KEY, Token } from './src/secret/secret.js';

const navigationAdd = document.querySelector(`#idNavAdd`);
const idNavBtn = document.querySelector('#idNavBtn');
const iconBtn = document.querySelector(`#iconBtn`);

const addNavigation = () => {
  console.log('Click');

  if (navigationAdd) {
    /* navigationAdd.classList.remove(`inactive`);
    navigationAdd.classList.add(`active`); */
    navigationAdd.classList.toggle(`active`);
  }
};

idNavBtn.addEventListener('click', addNavigation);
