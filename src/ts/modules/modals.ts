export const modals = () => {
  const bindModal = (bindModal: {
    triggersSelector: string;
    triggersModalSelector: string;
    triggersCloseSelector: string;
    triggersCloseClickOverlay: boolean;
  }) => {
    const trigger = document.querySelectorAll(bindModal.triggersSelector);
    const modal = document.querySelector<HTMLElement>(
      bindModal.triggersModalSelector
    );
    const close = document.querySelector(bindModal.triggersCloseSelector);
    const windows = document.querySelectorAll("[data-modal]");
    trigger.forEach((trigger) => {
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
    }

      close.addEventListener("click", () => {
        closeModal()
      });

      modal.addEventListener("click", (e: any) => {
        if (e.target === modal && bindModal.triggersCloseClickOverlay ) {
         closeModal()
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
    triggersSelector: ".popup_engineer_btn",
    triggersModalSelector: ".popup_engineer",
    triggersCloseSelector: ".popup_engineer .popup_close",
    triggersCloseClickOverlay: false,
  });
  bindModal({
    triggersSelector: ".phone_link",
    triggersModalSelector: ".popup",
    triggersCloseSelector: ".popup .popup_close",
    triggersCloseClickOverlay: false,
  });
  bindModal({
    triggersSelector: ".popup_calc_btn",
    triggersModalSelector: ".popup_calc",
    triggersCloseSelector: ".popup_calc_close",
    triggersCloseClickOverlay: false,
  });
  bindModal({
    triggersSelector: ".popup_calc_button",
    triggersModalSelector: ".popup_calc_profile",
    triggersCloseSelector: ".popup_calc_profile_close",
    triggersCloseClickOverlay: false,
  });
  bindModal({
    triggersSelector: ".popup_calc_profile_button",
    triggersModalSelector: ".popup_calc_end",
    triggersCloseSelector: ".popup_calc_end_close",
    triggersCloseClickOverlay: false,
  });
  // showModalByTime('.popup', 60000);
  };
