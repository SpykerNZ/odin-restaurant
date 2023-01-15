export default function createHomePage() {
  const homeElems = document.createElement("div");
  homeElems.classList.add("home");

  const containerElem = document.createElement("div");

  const titleElem = document.createElement("p");
  titleElem.textContent = "Quynh's Kitchen";
  titleElem.classList.add("title");
  containerElem.append(titleElem);

  const subtitleElem = document.createElement("p");
  subtitleElem.textContent = "Vietnamse Cusine Brought to Life";
  subtitleElem.classList.add("subtitle");
  containerElem.append(subtitleElem);

  homeElems.append(containerElem);
  return homeElems;
}
