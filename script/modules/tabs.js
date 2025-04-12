const tabs = () => {
  const tabsControlButton = document.querySelectorAll('.control-item');
  const tabsContainer = document.querySelector('.tabs-container');


  tabsControlButton.forEach((el) => {
    el.addEventListener('click', (event) => {
      const skills = event.currentTarget.dataset.skills;

      tabsControlButton.forEach((el) => {
        el.classList.remove('active');
        document.querySelector(`.tab-${el.getAttribute('data-skills')}`).style.display = 'none';
        
        if (el.getAttribute('data-skills') == skills) {
          el.classList.add('active');
          document.querySelector(`.tab-${el.getAttribute('data-skills')}`).style.display = 'block';

          console.log(el.innerText)
          if (window.innerWidth <= 500) {
            document.querySelector('.education-text').innerText = el.innerText;
          }
        }
      })
    })
  })
}

export default tabs;