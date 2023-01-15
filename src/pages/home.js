export default function createHomePage(parentElement) {
  const homeElem = document.createElement("div");
  homeElem.classList.add("home");

  const containerElem = document.createElement("div");

  const titleElem = document.createElement("p");
  titleElem.textContent = "Quynh's Kitchen";
  titleElem.classList.add("title");
  containerElem.append(titleElem);

  const subtitleElem = document.createElement("p");
  subtitleElem.textContent = "Vietnamse Cusine Brought to Life";
  subtitleElem.classList.add("subtitle");
  containerElem.append(subtitleElem);

  homeElem.append(containerElem);
  parentElement.append(homeElem);
}
