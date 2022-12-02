//*TODO === === ==== HEADER ==== === === */
const navigationAdd = document.getElementById(`idNavAdd`);

//** === >> BTN Burger Nav << === */
export const addNavigation = () => {
  console.log('Click');

  if (navigationAdd) {
    /* navigationAdd.classList.remove(`inactive`);
    navigationAdd.classList.add(`active`); */
    navigationAdd.classList.toggle(`active`);
  }
};
