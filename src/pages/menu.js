export default function createMenuPage() {
  const menuElems = document.createElement("div");
  menuElems.classList.add("home");

  const containerElem = document.createElement("div");

  const titleElem = document.createElement("p");
  titleElem.textContent = "MENU";
  titleElem.classList.add("title");
  containerElem.append(titleElem);

  const subtitleElem = document.createElement("p");
  subtitleElem.textContent = "Vietnamse Cusine Brought to Life";
  subtitleElem.classList.add("subtitle");
  containerElem.append(subtitleElem);

  menuElems.append(containerElem);
  return menuElems;
}
