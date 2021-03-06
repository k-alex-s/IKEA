//
const btnBurger = document.querySelector(".btn-burger");
const btnClose = document.querySelector(".btn-close");
const btnReturn = document.querySelector(".btn-return");
const catalog = document.querySelector(".catalog");
//const overlay = document.querySelector(".overlay");
//const catalogList = document.querySelector(".catalog-list");
const subCatalog = document.querySelector(".subcatalog");
const subCatalogHeader = document.querySelector(".subcatalog-header");

const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.insertAdjacentElement("beforeend", overlay);
const openMenu = () => {
  console.log("openmenu");
  catalog.classList.add("open");
  overlay.classList.add("active");
};

const closeMenu = () => {
  closeSubMenu();
  catalog.classList.remove("open");
  overlay.classList.remove("active");
};

const openSubMenu = (e) => {
  e.preventDefault();
  const target = e.target;
  const itemList = e.target.closest(".catalog-list__item");
  if (itemList) {
    subCatalogHeader.innerHTML = itemList.innerHTML;
    subCatalog.classList.add("subopen");
  }
};

const closeSubMenu = () => {
  subCatalog.classList.remove("subopen");
};

btnBurger.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);
btnReturn.addEventListener("click", closeSubMenu);
overlay.addEventListener("click", closeMenu);
catalog.addEventListener("click", openSubMenu);

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    closeMenu();
  }
});
