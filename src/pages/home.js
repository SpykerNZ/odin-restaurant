export default function createHomePage() {
  const homeElems = document.createElement("div");
  homeElems.classList.add("home");

  const containerElem = document.createElement("div");

  const jsonHomeData = require("../data/home.json");

  const titleElem = document.createElement("p");
  titleElem.textContent = jsonHomeData.title;
  titleElem.classList.add("title");
  containerElem.append(titleElem);

  const subtitleElem = document.createElement("p");
  subtitleElem.textContent = jsonHomeData.subtitle;
  subtitleElem.classList.add("subtitle");
  containerElem.append(subtitleElem);

  homeElems.append(containerElem);
  return homeElems;
}
