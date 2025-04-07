const slider = () => {
  const sliderTransport = document.querySelector('.slider-transport');
  const slider = document.querySelector('.slider');
  const sliderButtons = document.querySelector('.slider-buttons');
  const sliderBtnLeft = document.querySelector('.arrow-left');
  const sliderBtnRight = document.querySelector('.arrow-right');

  let sliderPosition = 0;
  let previousWidth = window.innerWidth;

  let slides = [];

  fetch('./data/trainers.json')
    .then((response) => response.json())
    .then((data) => {
      slides.push(...data);
      addSlidesToHTML();
    });

 const addSlidesToHTML = () => {
    if (slides != null) {
      slider.innerHTML = '';

      slides.forEach((card) => {
        const newCard = createCardElement(card);
        slider.appendChild(newCard);
      });
    }
  }

  const createCardElement = (card) => {
    let newCard = document.createElement('div');
    newCard.id = `${card.id}`;
    newCard.classList.add('slide');
    newCard.innerHTML =
    `
      <img src="${card.img}" alt="${card.name}"/>
      <h4 class="h4">${card.name}</h4>
      <p class="p">${card.occupation}</p>
      <p class="details">Подробнее</p>
    `

    return newCard;
  }


  const sliderControl = (event) => {
    const sliderTransportWidth = sliderTransport.offsetWidth;
    const sliderHiddenWidth = slider.offsetWidth - sliderTransportWidth;
    const isMobile = previousWidth <= 768;
    // const sliderStep = sliderHiddenWidth / (isMobile ? 2 : 1);
    const sliderStep = sliderHiddenWidth / (previousWidth <= 500 ? 4 : previousWidth <= 800 ? 3 : previousWidth <= 1000 ? 2 : 1);
    const correctSliderStep = -sliderStep / 5;

    if (event.target.closest('.arrow-left')) {
      sliderPosition += sliderStep;
      console.log(sliderPosition);
    }

    if (event.target.closest('.arrow-right')) {
      sliderPosition -= sliderStep;
      console.log(sliderPosition);
    }

    slider.style.transform = `translateX(${sliderPosition}px)`;

    sliderBtnLeft.disabled = sliderPosition >= correctSliderStep;
    sliderBtnRight.disabled = Math.abs(sliderPosition) >= sliderHiddenWidth + correctSliderStep;
  }

  const sliderRestartPosition = () => {
    const currentWidth = window.innerWidth;

    if (currentWidth !== previousWidth) {
      sliderPosition = 0;
      sliderBtnLeft.disabled = true;
      sliderBtnRight.disabled = false;
      slider.style.transform = `translateX(${sliderPosition}px)`;

      previousWidth = currentWidth;
    }
  }

  if (sliderButtons) {
    sliderButtons.addEventListener('click', sliderControl);
    window.addEventListener('resize', sliderRestartPosition);
  }
}

export default slider;