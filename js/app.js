const tabsEl = document.querySelector(".tabs");
let moveIndex = 0;

function handelMenuTabs(event) {
  const tab = event.target.closest(".tab");

  if (tab) {
    const tabIndex = tab.dataset.tabIndex;
    const undelineEl = document.querySelector(".undeline");
    undelineEl.style.width = "110px";

    setTimeout(() => {
      tabsEl.style.setProperty("--active-tab", tabIndex);
      undelineEl.style.width = "100px";
    }, 200);
  }
}

tabsEl.addEventListener("click", () => handelMenuTabs(event));
