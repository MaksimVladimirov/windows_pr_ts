import { checkNumInputs } from "./checkNumInputs";

export const changeModalState = (state: { [key: string]: number | string }) => {
  const windowForms = document.querySelectorAll(".balcon_icons_img");
  const windowWidth = document.querySelectorAll("#width");
  const windowHeight = document.querySelectorAll("#height");
  const windowType = document.querySelectorAll("#view_type");
  const windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  const bindActionToElems = (event: string, element: any, property: string) => {
    element.forEach((item: any, index: number) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[property] = index;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              index === 0 ? (state[property] = "Холодное") : (state[property] = "Теплое");
            }
          case "SELECT":
            state[property] = item.value;
            break;
        }
        console.log(state);
      });
    });
  };

  bindActionToElems("click", windowForms, "form");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfile, "profile");
};
