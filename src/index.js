import createHeader from "./components/header";
import createHomePage from "./pages/home";
import createFooter from "./components/footer";
import "./styles/styles.scss";

const content = document.querySelector("div.container");

createHeader(content);
createHomePage(content);
createFooter(content);
