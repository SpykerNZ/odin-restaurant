export default function createContactPage() {
  const contactElems = document.createElement("div");
  contactElems.classList.add("contact");

  // Add Title Elem
  const titleElem = document.createElement("p");
  titleElem.textContent = "Contact Us";
  titleElem.classList.add("title");
  contactElems.append(titleElem);

  // Add Contact Items
  const contactItemsElem = document.createElement("div");
  contactItemsElem.classList.add("items");

  const jsonContactData = require("../data/contact.json");
  console.log(jsonContactData);
  for (let key in jsonContactData) {
    const elem = document.createElement("p");
    elem.classList.add(key);
    elem.textContent = jsonContactData[key];
    contactItemsElem.append(elem);
  }

  contactElems.append(contactItemsElem);

  return contactElems;
}
