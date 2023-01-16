export default function createMenuPage() {
  const menuElems = document.createElement("div");
  menuElems.classList.add("menu");

  // Add Title Elem
  const titleElem = document.createElement("p");
  titleElem.textContent = "Menu";
  titleElem.classList.add("title");
  menuElems.append(titleElem);

  // Add Menu Items
  const menuItemsElem = document.createElement("div");
  const jsonMenuData = require("../data/menu.json");
  const menuImages = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  jsonMenuData.menuItems.forEach((item) => {
    const menuItemElem = document.createElement("div");
    menuItemElem.classList.add("item");

    for (let key in item.text) {
      const elem = document.createElement("p");
      elem.classList.add(key);
      elem.textContent = item.text[key];
      menuItemElem.append(elem);
    }

    const imageElem = document.createElement("img");
    imageElem.classList.add("picture");
    imageElem.src = menuImages[item.image];
    menuItemElem.append(imageElem);
    menuItemsElem.append(menuItemElem);
  });

  console.log();
  menuElems.append(menuItemsElem);
  return menuElems;
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
