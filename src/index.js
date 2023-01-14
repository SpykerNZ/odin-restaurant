import createHeader from "./pages/header";
import "./styles/styles.css";
import vietnamStreetImgPath from "./images/vietnam-street.jpg";

console.log("Hello World!");

const content = document.querySelector("div.content");

console.log(vietnamStreetImgPath);

createHeader(content);
