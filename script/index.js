import burgerMenu from "./modules/burger-menu.js";
import { showPopup } from "./modules/modal.js";
import sendForm from "./modules/send-form.js";
import slider from "./modules/slider.js";
import tabs from "./modules/tabs.js";

window.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  showPopup();
  slider();
  tabs();
  sendForm();
});
