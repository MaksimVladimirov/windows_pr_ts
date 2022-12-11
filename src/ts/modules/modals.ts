export const modals = () => {
  const bindModal = (
    triggerSelector: string,
    triggerModalSelector: any,
    triggerCloseSelector: string
  ) => {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(triggerModalSelector);
    const close = document.querySelector(triggerCloseSelector);


    trigger.forEach((trigger) => {
      trigger.addEventListener("click", (e: any) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        // document.body.classList.add('modal-open');
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });

    modal.addEventListener("click", (e: any) => {
      if (e.target === modal || close) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  };

  const showModalByTime = (selector: any , time: number) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  };

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  // showModalByTime('.popup', 60000);
};
