export default function createFooter() {
  const footerElem = document.createElement("div");
  footerElem.classList.add("footer");

  const textElem = document.createElement("p");
  textElem.textContent = "Created by Jamie Spyker - The Odin Project 2023";

  footerElem.append(textElem);
  return footerElem;
}
