const modalCard = document.querySelector('.modal');

const getScrollbarWidth = () => {
  let div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.append(div);
  let scrollbarWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollbarWidth;
};

const scroll = getScrollbarWidth();

const showPopup = () => {
  document.addEventListener('click', (event) => {
    let target = event.target.closest('.slide');
    // console.log({target});

    if (target) {
      modalCard.classList.add('visible');
      document.querySelector('.overlay').classList.add('overlay-on');
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;

      document.querySelector('.img-modal').src = target.querySelector('img').src;
      document.querySelector('.name-modal').innerHTML = target.querySelector('.h4').innerText;
      document.querySelector('.occupation-modal').innerHTML = target.querySelector('.p').innerText;
    }
  });
};

document.addEventListener('click', (event) => {
  let target = event.target.closest('.modal-close-btn');
  let classes = event.target.classList;

  if (target || classes.contains('overlay-on')) {
    modalCard.classList.remove('visible');
    document.querySelector('.overlay').classList.remove('overlay-on');
    setTimeout(() => {      
      document.body.style.marginRight = '0px';
      document.body.style.overflow = '';
    }, 500);
  }
})

export { showPopup };