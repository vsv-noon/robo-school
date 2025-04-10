const modalCard = document.querySelector(".modal");

const getScrollbarWidth = () => {
  let div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";
  document.body.append(div);
  let scrollbarWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollbarWidth;
};

const scroll = getScrollbarWidth();

const createElementPopup = (currentName) => {
  modalCard.classList.add("modal");

  fetch("./data/trainers.json")
    .then((response) => response.json())
    .then((jsonData) => {
      let thisCard = jsonData.filter((value) => value.name == currentName)[0];

      modalCard.innerHTML = `
      <button class="modal-close-btn">
        <span class="span-text">Закрыть</span>

        <span class="span-line"></span>
        <span class="span-line"></span>
      </button>
      <div class="description-modal">
        <img class="img-modal" src="${thisCard.img}"
          alt="Марина Орлова"
        />
        <div class="text-description-modal">
          <h4 class="name-modal">${thisCard.name}</h4>
          <p class="occupation-modal">${thisCard.occupation}</p>
          <div class="icons-container">

            <a href="/">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z"
                    fill="#40B3E0"
                  ></path>
                  <path
                    d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475"
                    fill="#D2E5F1"
                  ></path>
                  <path
                    d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624"
                    fill="#B5CFE4"
                  ></path>
                </g>
              </svg>
            </a>

            <a href="/">
              <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <circle cx="512" cy="512" r="512" style="fill:#2787f5"/>
                <path d="M585.83 271.5H438.17c-134.76 0-166.67 31.91-166.67 166.67v147.66c0 134.76 31.91 166.67 166.67 166.67h147.66c134.76 0 166.67-31.91 166.67-166.67V438.17c0-134.76-32.25-166.67-166.67-166.67zm74 343.18h-35c-13.24 0-17.31-10.52-41.07-34.62-20.71-20-29.87-22.74-35-22.74-7.13 0-9.17 2-9.17 11.88v31.57c0 8.49-2.72 13.58-25.12 13.58-37 0-78.07-22.4-106.93-64.16-43.45-61.1-55.33-106.93-55.33-116.43 0-5.09 2-9.84 11.88-9.84h35c8.83 0 12.22 4.07 15.61 13.58 17.31 49.9 46.17 93.69 58 93.69 4.41 0 6.45-2 6.45-13.24v-51.6c-1.36-23.76-13.92-25.8-13.92-34.28 0-4.07 3.39-8.15 8.83-8.15h55c7.47 0 10.18 4.07 10.18 12.9v69.58c0 7.47 3.39 10.18 5.43 10.18 4.41 0 8.15-2.72 16.29-10.86 25.12-28.17 43.11-71.62 43.11-71.62 2.38-5.09 6.45-9.84 15.28-9.84h35c10.52 0 12.9 5.43 10.52 12.9-4.41 20.37-47.18 80.79-47.18 80.79-3.73 6.11-5.09 8.83 0 15.61 3.73 5.09 16 15.61 24.1 25.12 14.94 17 26.48 31.23 29.53 41.07 3.45 9.84-1.65 14.93-11.49 14.93z" style="fill:#fff"/>
             </svg>
            </a>

          </div>
        </div>
      </div>
      <div class="info-modal">
        <ul class="tabs-control">
          <li class="control-item active" data-skills="education">
            Образование
          </li>
          <li class="control-item" data-skills="experience">Опыт работы</li>
          <li class="control-item" data-skills="reward">Награды</li>
        </ul>
        <div class="tabs-container">
          <div class="tab-education">
            <ul>
              <li class="study-date">${thisCard.education["date start"]} — ${thisCard.education["date finish"]}</li>
              <li class="university">
              ${thisCard.education.university}
              </li>
              <li class="faculty">Факультет: ${thisCard.education.faculty}</li>
              <li class="speciality">Специальность: ${thisCard.education.speciality}</li>
              <li class="study-form">Форма обучения: ${thisCard.education["study form"]}</li>
            </ul>
            <h5 class="h5-modal">Курсы и тренинги</h5>
            <ul>
              <li>Ноябрь 2020 — Февраль 2021</li>
              <li>Программа дополнительного образования «3D Моделирование»</li>
              <li>
                Место проведения: Институт дополнительного образования «Политех»
              </li>
            </ul>


            <ul>
              <li>Октябрь 2019 — Декабрь 2019</li>
              <li>Программа дополнительного образования «3D Моделирование»</li>
              <li>
                Место проведения: Институт дополнительного образования «Политех»
              </li>
            </ul>
          </div>
          <div class="tab-experience"></div>
          <div class="tab-rewards"></div>
        </div>
      
    `;
    });
  document.body.appendChild(modalCard);
};

const fillPopupFields = (currentName) => {
  fetch("./data/trainers.json")
    .then((response) => response.json())
    .then((jsonData) => {
      let thisCard = jsonData.filter((value) => value.name == currentName)[0];

      // console.log(thisCard);

      document.querySelector(".img-modal").src = thisCard.img;
      document.querySelector(".name-modal").innerHTML = thisCard.name;
      document.querySelector(".occupation-modal").innerHTML =
        thisCard.occupation;
      document.querySelector(
        ".study-date"
      ).innerHTML = `${thisCard.education["date start"]} — ${thisCard.education["date finish"]}`;
      document.querySelector(".university").innerHTML =
        thisCard.education.university;
      document.querySelector(
        ".faculty"
      ).innerHTML = `Факультет: ${thisCard.education.faculty}`;
      document.querySelector(
        ".speciality"
      ).innerHTML = `Специальность: ${thisCard.education.speciality}`;
      document.querySelector(
        ".study-form"
      ).innerHTML = `Форма обучения: ${thisCard.education["study form"]}`;

      if (thisCard.experience) {
        document.querySelector(".experience").classList.remove("inactive");
        document.querySelector('.work-dates').innerHTML = `${thisCard.experience['date start']} — ${thisCard.experience['date finish']}`;
        document.querySelector('.company').innerHTML = thisCard.experience.company;
      } else {
        document.querySelector(".experience").classList.add("inactive");
      }

      if (thisCard.rewards) {
        document.querySelector(".rewards").classList.remove("inactive");
        thisCard.rewards.forEach((el) => {
          document.querySelector(".ul-rewards").innerHTML = "";
          let item = document.createElement("li");
          item.classList.add("li-rewards");
          item.innerHTML = el;

          document.querySelector(".ul-rewards").appendChild(item);
        });
      } else {
        document.querySelector(".rewards").classList.add("inactive");
        // document.querySelector(".ul-rewards").innerHTML = "";
      }
    });
};

const showPopup = () => {
  document.addEventListener("click", (event) => {
    let target = event.target.closest(".slide");
    // console.log({target});

    if (target) {
      modalCard.classList.add("visible");
      document.querySelector(".overlay").classList.add("overlay-on");
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
      // document.querySelector(".ul-rewards").innerHTML = "";

      fillPopupFields(target.children[1].textContent);

      // createElementPopup(target.children[1].textContent);
      // console.log(target.children[1].textContent);

      document.querySelector(".education").classList.add("active");
      document.querySelector(".experience").classList.remove("active");
      document.querySelector(".rewards").classList.remove("active");
      document.querySelector(".tab-education").style.display = "block";
      document.querySelector(".tab-experience").style.display = "none";
      document.querySelector(".tab-rewards").style.display = "none";
    }
  });
};

document.addEventListener("click", (event) => {
  let target = event.target.closest(".modal-close-btn");
  let classes = event.target.classList;

  if (target || classes.contains("overlay-on")) {
    modalCard.classList.remove("visible");
    document.querySelector(".overlay").classList.remove("overlay-on");
    setTimeout(() => {
      document.body.style.marginRight = "0px";
      document.body.style.overflow = "";
    }, 500);
  }
});

const tabsControlButton = document.querySelector(".tabs-control");

tabsControlButton.addEventListener("click", () => {
  if (window.innerWidth <= 500) {
    if (
      tabsControlButton.style.height ===
      tabsControlButton.scrollHeight + "px"
    ) {
      tabsControlButton.style.height = 47 + "px";
    } else {
      tabsControlButton.style.height = tabsControlButton.scrollHeight + "px";
    }
  }
});

export { showPopup };
