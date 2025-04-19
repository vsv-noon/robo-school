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
  modalCard.innerHTML = "";

  fetch("./data/trainers.json")
    .then((response) => response.json())
    .then((jsonData) => {
      let thisCard = jsonData.filter((value) => value.name == currentName)[0];

      modalCloseButton();
      descriptionModal(thisCard);
      infoModal(thisCard);
      tabEducation(thisCard);
      tabExperience(thisCard);
      tabRewards(thisCard);
    });

  document.body.appendChild(modalCard);
};

function descriptionModal(thisCard) {
  const descriptionModal = document.createElement("div");
  descriptionModal.classList.add("description-modal");

  const imgModal = document.createElement("img");
  imgModal.classList.add("img-modal");
  imgModal.src = thisCard.img;
  imgModal.setAttribute("alt", thisCard.name);

  const textDescriptionModal = document.createElement("div");
  textDescriptionModal.classList.add("text-description-modal");

  const h4NameModal = document.createElement("h4");
  h4NameModal.classList.add("name-modal");
  h4NameModal.innerText = thisCard.name;

  const occupationModal = document.createElement("p");
  occupationModal.classList.add("occupation-modal");
  occupationModal.innerText = thisCard.occupation;

  const iconsContainer = document.createElement("div");
  iconsContainer.classList.add("icons-container");

  const telegramLink = document.createElement("a");
  telegramLink.setAttribute("href", "/");
  telegramLink.innerHTML = `
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
              </svg>`;

  const vkLInk = document.createElement("a");
  vkLInk.setAttribute("href", "/");
  vkLInk.innerHTML = `
      <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <circle cx="512" cy="512" r="512" style="fill:#2787f5"/>
                <path d="M585.83 271.5H438.17c-134.76 0-166.67 31.91-166.67 166.67v147.66c0 134.76 31.91 166.67 166.67 166.67h147.66c134.76 0 166.67-31.91 166.67-166.67V438.17c0-134.76-32.25-166.67-166.67-166.67zm74 343.18h-35c-13.24 0-17.31-10.52-41.07-34.62-20.71-20-29.87-22.74-35-22.74-7.13 0-9.17 2-9.17 11.88v31.57c0 8.49-2.72 13.58-25.12 13.58-37 0-78.07-22.4-106.93-64.16-43.45-61.1-55.33-106.93-55.33-116.43 0-5.09 2-9.84 11.88-9.84h35c8.83 0 12.22 4.07 15.61 13.58 17.31 49.9 46.17 93.69 58 93.69 4.41 0 6.45-2 6.45-13.24v-51.6c-1.36-23.76-13.92-25.8-13.92-34.28 0-4.07 3.39-8.15 8.83-8.15h55c7.47 0 10.18 4.07 10.18 12.9v69.58c0 7.47 3.39 10.18 5.43 10.18 4.41 0 8.15-2.72 16.29-10.86 25.12-28.17 43.11-71.62 43.11-71.62 2.38-5.09 6.45-9.84 15.28-9.84h35c10.52 0 12.9 5.43 10.52 12.9-4.41 20.37-47.18 80.79-47.18 80.79-3.73 6.11-5.09 8.83 0 15.61 3.73 5.09 16 15.61 24.1 25.12 14.94 17 26.48 31.23 29.53 41.07 3.45 9.84-1.65 14.93-11.49 14.93z" style="fill:#fff"/>
             </svg>
    `;

  textDescriptionModal.appendChild(h4NameModal);
  textDescriptionModal.appendChild(occupationModal);
  textDescriptionModal.appendChild(iconsContainer);
  iconsContainer.appendChild(telegramLink);
  iconsContainer.appendChild(vkLInk);

  descriptionModal.appendChild(imgModal);
  descriptionModal.appendChild(textDescriptionModal);

  modalCard.appendChild(descriptionModal);
}

function modalCloseButton() {
  const modalCloseBtn = document.createElement("button");
  modalCloseBtn.classList.add("modal-close-btn");

  const spanText = document.createElement("span");
  spanText.classList.add("span-text");
  spanText.innerText = "Закрыть";

  const spanLineFirst = document.createElement("span");
  spanLineFirst.classList.add("span-line");

  const spanLineSecond = document.createElement("span");
  spanLineSecond.classList.add("span-line");

  modalCloseBtn.appendChild(spanText);
  modalCloseBtn.appendChild(spanLineFirst);
  modalCloseBtn.appendChild(spanLineSecond);
  document.querySelector(".modal").appendChild(modalCloseBtn);
}

function infoModal(thisCard) {
  const infoModal = document.createElement("div");
  infoModal.classList.add("info-modal");

  const tabsContainer = document.createElement("div");
  tabsContainer.classList.add("tabs-container");

  const tabsControl = document.createElement("ul");
  tabsControl.classList.add("tabs-control");

  const controlItemEducation = document.createElement("li");
  controlItemEducation.classList.add("control-item", "education", "active");
  controlItemEducation.setAttribute("data-skills", "education");

  const controlItemEducationSpan = document.createElement("span");
  controlItemEducationSpan.classList.add("tabs-control-text", "education-text");
  controlItemEducationSpan.innerText = "Образование";

  const controlItemEducationSpanSVG = document.createElement("span");
  controlItemEducationSpanSVG.classList.add("education-span-svg");

  controlItemEducationSpanSVG.innerHTML = `<svg
      class="education-svg"
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.52875 4.92957C2.50458 4.90603 2.40125 4.81714 2.31625 4.73433C1.78167 4.24886 0.906667 2.98242 0.639583 2.31957C0.596667 2.21891 0.505833 1.9644 0.5 1.82842C0.5 1.69812 0.53 1.57392 0.590833 1.45539C0.675833 1.30764 0.809583 1.18911 0.9675 1.12417C1.07708 1.08236 1.405 1.01741 1.41083 1.01741C1.76958 0.952468 2.3525 0.916748 2.99667 0.916748C3.61042 0.916748 4.16958 0.952468 4.53375 1.00564C4.53958 1.01173 4.94708 1.07668 5.08667 1.14771C5.34167 1.27801 5.5 1.53251 5.5 1.80488V1.82842C5.49375 2.0058 5.33542 2.37884 5.32958 2.37884C5.06208 3.00597 4.23 4.24318 3.67708 4.74042C3.67708 4.74042 3.535 4.88046 3.44625 4.94135C3.31875 5.03633 3.16083 5.08341 3.00292 5.08341C2.82667 5.08341 2.6625 5.03024 2.52875 4.92957"
        fill="white"
      />
    </svg>`;

  const controlItemExperience = document.createElement("li");
  controlItemExperience.classList.add("control-item", "experience");

  if (!thisCard.experience) {
    controlItemExperience.classList.add("inactive");
  }

  controlItemExperience.setAttribute("data-skills", "experience");

  const controlItemExperienceSpan = document.createElement("span");
  controlItemExperienceSpan.classList.add("tabs-control-text");
  controlItemExperienceSpan.innerText = "Опыт работы";

  const controlItemRewards = document.createElement("li");
  controlItemRewards.classList.add("control-item", "rewards");

  if (!thisCard.rewards) {
    controlItemRewards.classList.add("inactive");
  }

  controlItemRewards.setAttribute("data-skills", "rewards");

  const controlItemRewardsSpan = document.createElement("span");
  controlItemRewardsSpan.classList.add("tabs-control-text");
  controlItemRewardsSpan.innerText = "Награды";

  tabsControl.appendChild(controlItemEducation);
  tabsControl.appendChild(controlItemExperience);
  tabsControl.appendChild(controlItemRewards);

  infoModal.appendChild(tabsControl);
  infoModal.appendChild(tabsContainer);

  controlItemEducation.appendChild(controlItemEducationSpan);
  controlItemEducation.appendChild(controlItemEducationSpanSVG);

  controlItemExperience.appendChild(controlItemExperienceSpan);

  controlItemRewards.appendChild(controlItemRewardsSpan);

  document.querySelector(".modal").appendChild(infoModal);
}

function tabEducation(thisCard) {
  const tabEducation = document.createElement("div");
  tabEducation.classList.add("tab-education");
  const ul = document.createElement("ul");

  const studyDate = document.createElement("li");
  studyDate.classList.add("study-date");
  studyDate.innerText = `${thisCard.education["date start"]} — ${thisCard.education["date finish"]}`;

  const university = document.createElement("li");
  university.classList.add("university");
  university.innerText = thisCard.education.university;

  const faculty = document.createElement("li");
  faculty.classList.add("faculty");
  faculty.innerText = `Факультет: ${thisCard.education.faculty}`;

  const speciality = document.createElement("li");
  speciality.classList.add("speciality");
  speciality.innerText = `Специальность: ${thisCard.education.speciality}`;

  const studyForm = document.createElement("li");
  studyForm.classList.add("study-form");
  studyForm.innerText = `Специальность: ${thisCard.education.speciality}`;

  ul.appendChild(studyDate);
  ul.appendChild(university);
  ul.appendChild(faculty);
  ul.appendChild(studyForm);
  tabEducation.appendChild(ul);

  document.querySelector(".tabs-container").appendChild(tabEducation);
  courses(thisCard);
}

function courses(thisCard) {
  const h5Modal = document.createElement("h5");
  h5Modal.classList.add("h5-modal");
  h5Modal.innerText = "Курсы и тренинги";
  const coursesList = document.createElement("ul");

  if (thisCard.courses) {
    thisCard.courses.forEach((el) => {
      const ul = document.createElement("ul");
      const date = document.createElement("li");
      const title = document.createElement("li");
      const organization = document.createElement("li");

      date.innerText = `${el["date start"]} — ${el["date finish"]}`;
      title.innerText = el.title;
      organization.innerText = el.organization;
      ul.appendChild(date);
      ul.appendChild(title);

      ul.appendChild(organization);

      coursesList.appendChild(ul);
    });

    document.querySelector(".tab-education").appendChild(h5Modal);
    document.querySelector(".tab-education").appendChild(coursesList);
  }
}

function tabExperience(thisCard) {
  const tabExperience = document.createElement("div");
  tabExperience.classList.add("tab-experience");
  tabExperience.style.display = "none";
  const ul = document.createElement("ul");
  const workDates = document.createElement("li");
  workDates.classList.add("wok-dates");
  workDates.innerText = `${
    thisCard.experience ? thisCard.experience["date start"] : ""
  } — ${thisCard.experience ? thisCard.experience["date finish"] : ""}`;
  const company = document.createElement("li");
  company.classList.add("company");
  company.innerText = `${
    thisCard.experience ? thisCard.experience.company : ""
  }`;

  ul.appendChild(workDates);
  ul.appendChild(company);
  tabExperience.appendChild(ul);

  document.querySelector(".tabs-container").appendChild(tabExperience);
}

function tabRewards(thisCard) {
  const tabRewards = document.createElement("div");
  tabRewards.classList.add("tab-rewards");
  tabRewards.style.display = "none";
  const ulRewards = document.createElement("ul");
  ulRewards.classList.add("ul-rewards");

  if (thisCard.rewards) {
    thisCard.rewards.forEach((el) => {
      const rewardsItem = document.createElement("li");
      rewardsItem.innerText = el;
      ulRewards.appendChild(rewardsItem);
    });
  }

  tabRewards.appendChild(ulRewards);

  document.querySelector(".tabs-container").appendChild(tabRewards);
}

function showPopup() {
  document.addEventListener("click", (event) => {
    let target = event.target.closest(".slide");
    // console.log({target});

    if (target) {
      modalCard.classList.add("visible");
      document.querySelector(".overlay").classList.add("overlay-on");
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;

      createElementPopup(target.children[1].textContent);
    }
  });
}

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

export { showPopup };
