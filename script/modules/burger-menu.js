const burgerMenu = () => {
  const burgerMenuButton = document.querySelector('.burger-btn');
  const burgerMenu = document.querySelector('.nav-list');
  
  burgerMenuButton.addEventListener('click', () => {
    burgerMenuButton.classList.toggle('open');
    burgerMenu.classList.toggle('nav-list-open');
    document.body.classList.toggle('lock');
  });
}

export default burgerMenu;