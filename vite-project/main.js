//import './style.css';
//** === === Movie App === === */
import { API_KEY, Token } from './src/secret/secret.js';

const navAdd = document.querySelector(`#idNavAdd`);
const idNavBtn = document.querySelector('#idNavBtn');

const addNavigation = () => {
  console.log('Click');
  /* 
  if (navAdd === 'inactive') {
    navAdd.classList.add('active');
  } */
};

idNavBtn.addEventListener('click', addNavigation);
