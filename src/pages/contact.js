export default function createContactPage() {
  const contactElems = document.createElement("div");
  contactElems.classList.add("home");

  const containerElem = document.createElement("div");

  const titleElem = document.createElement("p");
  titleElem.textContent = "CONTACT";
  titleElem.classList.add("title");
  containerElem.append(titleElem);

  const subtitleElem = document.createElement("p");
  subtitleElem.textContent = "Vietnamse Cusine Brought to Life";
  subtitleElem.classList.add("subtitle");
  containerElem.append(subtitleElem);

  contactElems.append(containerElem);
  return contactElems;
}
