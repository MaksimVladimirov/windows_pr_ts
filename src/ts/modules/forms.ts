import { checkNumInputs } from "./checkNumInputs";

export const forms = (state: any) => {
  const forms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");

  checkNumInputs("input[name='user_phone']");

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  const postData = async (url: string, data: string) => {
    document.querySelector(".status").textContent = message.loading;
    const result = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await result.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  forms.forEach((form) => {
    form.addEventListener("submit", (e: any) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form.appendChild(statusMessage);

      const formData: any = new FormData(form);
      if (form.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData("assets/server.php", formData)
        .then((result) => {
          console.log(result);
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};
