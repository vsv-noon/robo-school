const tabs = () => {
  document.addEventListener("click", (event) => {
    let target = event.target.closest(".control-item");

    if (target) {
      document.querySelectorAll(".control-item").forEach((el) => {
        el.classList.remove("active");
        document.querySelector(
          `.tab-${el.getAttribute("data-skills")}`
        ).style.display = "none";
      });

      target.classList.add("active");
      document.querySelector(
        `.tab-${target.getAttribute("data-skills")}`
      ).style.display = "block";

      if (window.innerWidth <= 500) {
        document.querySelector(".education-text").innerText = target.innerText;
        if (
          target.parentNode.style.height ===
          target.parentNode.scrollHeight + "px"
        ) {
          target.parentNode.style.height = 47 + "px";
          document
            .querySelector(".education-svg")
            .classList.remove("education-svg-open");
        } else {
          document.querySelector(".education-text").innerText = "Образование";

          target.parentNode.style.height =
            target.parentNode.scrollHeight + "px";
          document
            .querySelector(".education-svg")
            .classList.add("education-svg-open");
        }
      }
    }
  });

  window.addEventListener("resize", () => {
    document.querySelectorAll(".control-item").forEach((el) => {
      el.classList.remove("active");
      document.querySelector(
        `.tab-${el.getAttribute("data-skills")}`
      ).style.display = "none";
    });
    if (document.querySelector(".education")) {
      document.querySelector(".education").classList.add("active");
      document.querySelector(
        `.tab-${document.querySelector(".education").getAttribute("data-skills")}`
      ).style.display = "block";
      document.querySelector(".education-text").innerText = "Образование";
    }
  });
};

export default tabs;
