export default function createHeader() {
  const headerElems = document.createElement("div");
  headerElems.classList.add("header");
  const pages = ["Home", "Menu", "Contact"];
  pages.forEach((page) => {
    const link = document.createElement(`div`);
    link.textContent = page.toUpperCase();
    link.classList.add(page.toLowerCase());
    headerElems.append(link);
  });
  return headerElems;
}

export function bindHomeButton(headerElems, func) {
  const homeButton = headerElems.querySelector(".home");
  homeButton.addEventListener("click", func);
}

export function bindMenuButton(headerElems, func) {
  const menuButton = headerElems.querySelector(".menu");
  menuButton.addEventListener("click", func);
}

export function bindContactButton(headerElems, func) {
  const contactButton = headerElems.querySelector(".contact");
  contactButton.addEventListener("click", func);
}
