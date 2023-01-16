export default function createContactPage() {
  const contactElems = document.createElement("div");
  contactElems.classList.add("contact");

  const jsonContactData = require("../data/contact.json");
  console.log(jsonContactData);
  for (let key in jsonContactData) {
    const elem = document.createElement("p");
    elem.classList.add(key);
    elem.textContent = jsonContactData[key];
    contactElems.append(elem);
  }

  return contactElems;
}
