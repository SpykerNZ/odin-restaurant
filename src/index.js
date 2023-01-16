import createHeader, {
  bindContactButton,
  bindHomeButton,
  bindMenuButton,
} from "./components/header";
import createContent, { setContent } from "./components/content";
import createFooter from "./components/footer";
import createHomePage from "./pages/home";
import createContactPage from "./pages/contact";
import createMenuPage from "./pages/menu";
import "./styles/styles.scss";

const container = document.querySelector("div.container");

const headerElems = createHeader();
const contentElems = createContent();
const footerElems = createFooter();

const homePage = createHomePage();
const menuPage = createMenuPage();
const contactPage = createContactPage();

bindHomeButton(headerElems, () => setContent(contentElems, homePage));
bindMenuButton(headerElems, () => setContent(contentElems, menuPage));
bindContactButton(headerElems, () => setContent(contentElems, contactPage));

container.append(headerElems);
container.append(contentElems);
container.append(footerElems);

setContent(contentElems, homePage);
