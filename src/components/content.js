export default function createContent() {
  const contentElem = document.createElement("div");
  contentElem.classList.add("content");
  return contentElem;
}

export function setContent(contentElem, pageElems) {
  contentElem.innerHTML = "";
  contentElem.append(pageElems);
}
