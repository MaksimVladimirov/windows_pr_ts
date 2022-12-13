export const checkNumInputs = (selector: any) => {
  const numInputs = document.querySelectorAll(selector);

  numInputs.forEach((input: any) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/, "");
    });
  });
};
