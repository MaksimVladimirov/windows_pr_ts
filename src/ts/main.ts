import "./slider";
import {
  tabs,
  modals,
  forms,
  changeModalState,
  checkNumInputs,
  timer,
} from "./modules";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const modalState = {};
  const deadline = "2020-02-01";

  changeModalState(modalState);

  modals();

  tabs({
    headerSelector: ".glazing_slider",
    tabSelector: ".glazing_block",
    contentSelector: ".glazing_content",
    activeClass: "active",
    display: "block",
  });

  tabs({
    headerSelector: ".decoration_slider",
    tabSelector: ".no_click",
    contentSelector: ".decoration_content > div > div",
    activeClass: "after_click",
    display: "block",
  });

  tabs({
    headerSelector: ".balcon_icons",
    tabSelector: ".balcon_icons_img",
    contentSelector: ".big_img > img",
    activeClass: "do_image_more",
    display: "inline-block",
  });

  forms(modalState);
  timer(".container1", deadline);
});
