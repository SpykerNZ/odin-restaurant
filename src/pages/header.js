export default function createHeader(parentElement) {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  const pages = ["Home", "Menu", "Contact"];
  pages.forEach((page) => {
    const link = document.createElement(`div`);
    link.textContent = page;
    link.classList.add(page.toLowerCase());
    headerDiv.append(link);
  });
  parentElement.append(headerDiv);
}
