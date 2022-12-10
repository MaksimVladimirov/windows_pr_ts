export const tabs = ({
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
}) => {
  const header = document.querySelector(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((content) => {
      content.style.display = "none";
    });

    tab.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  }

  const showTabContent = (i = 0) => {
    content[i].style.display = "block";
    tab[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((tab, i) => {
        if (target == tab || target.parentNode == tab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};
