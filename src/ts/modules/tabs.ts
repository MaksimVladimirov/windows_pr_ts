export const tabs = (tabs: {
  headerSelector: string;
  tabSelector: string;
  contentSelector: any;
  activeClass: any;
}) => {
  const header = document.querySelector(tabs.headerSelector);
  const tab = document.querySelectorAll(tabs.tabSelector);
  const content = document.querySelectorAll(tabs.contentSelector);

  function hideTabContent() {
    content.forEach((content) => {
      content.style.display = "none";
    });

    tab.forEach((tab) => {
      tab.classList.remove(tabs.activeClass);
    });
  }

  const showTabContent = (i = 0) => {
    content[i].style.display = "block";
    tab[i].classList.add(tabs.activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e: any) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabs.tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(
          tabs.tabSelector.replace(/\./, "")
        ))
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
