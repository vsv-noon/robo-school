const slider = () => {
  const sliderTransport = document.querySelector('.slider-transport');
  const slider = document.querySelector('.slider');
  const sliderButtons = document.querySelector('.slider-buttons');
  const sliderBtnLeft = document.querySelector('.arrow-left');
  const sliderBtnRight = document.querySelector('.arrow-right');

  let sliderPosition = 0;
  let previousWidth = window.innerWidth;

  const sliderControl = (event) => {
    const sliderTransportWidth = sliderTransport.offsetWidth;
    const sliderHiddenWidth = slider.offsetWidth - sliderTransportWidth;
    const isMobile = previousWidth <= 768;
    const sliderStep = sliderHiddenWidth / (isMobile ? 2 : 1);
    const correctSliderStep = -sliderStep / 4;

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