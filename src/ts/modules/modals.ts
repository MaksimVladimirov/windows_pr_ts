export const modals = () => {
  const bindModal = ({
    triggerSelector,
    triggerModalSelector,
    triggerCloseSelector,
    triggerCloseClickOverlay,
  }: {
    triggerSelector: string;
    triggerModalSelector: string;
    triggerCloseSelector: string;
    triggerCloseClickOverlay: boolean;
  }) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector<HTMLElement>(triggerModalSelector);
    const close = document.querySelector(triggerCloseSelector);
    const windows = document.querySelectorAll("[data-modal]");
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e: any) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((window: any) => {
          window.style.display = "none";
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });

    const closeModal = () => {
      windows.forEach((window: any) => {
        window.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
    };

    close.addEventListener("click", () => {
      closeModal();
    });

    modal.addEventListener("click", (e: any) => {
      if (e.target === modal && triggerCloseClickOverlay) {
        closeModal();
      }
    });
  };

  const showModalByTime = (selector: any, time: number) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  };

  bindModal({
    triggerSelector: ".popup_engineer_btn",
    triggerModalSelector: ".popup_engineer",
    triggerCloseSelector: ".popup_engineer .popup_close",
    triggerCloseClickOverlay: false,
  });
  bindModal({
    triggerSelector: ".phone_link",
    triggerModalSelector: ".popup",
    triggerCloseSelector: ".popup .popup_close",
    triggerCloseClickOverlay: false,
  });
  bindModal({
    triggerSelector: ".popup_calc_btn",
    triggerModalSelector: ".popup_calc",
    triggerCloseSelector: ".popup_calc_close",
    triggerCloseClickOverlay: false,
  });
  bindModal({
    triggerSelector: ".popup_calc_button",
    triggerModalSelector: ".popup_calc_profile",
    triggerCloseSelector: ".popup_calc_profile_close",
    triggerCloseClickOverlay: false,
  });
  bindModal({
    triggerSelector: ".popup_calc_profile_button",
    triggerModalSelector: ".popup_calc_end",
    triggerCloseSelector: ".popup_calc_end_close",
    triggerCloseClickOverlay: false,
  });
  // showModalByTime('.popup', 60000);
};
