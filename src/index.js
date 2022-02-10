import pageLoad from "./pages/pageDemo";
import getHomePage from "./pages/homePage";
import { generateTextElement, generateEmptyDiv } from "./functions/elementGenerator";
import getMenuPage from "./pages/menuPage";
import getContactPage from "./pages/contactPage";

const content = document.getElementById("content");
const title = generateTextElement("h1", "title", "The Bakery");

// construct navbar
const navbar = generateEmptyDiv("navbar");
const homeButton = generateTextElement("button", "button button-home", "Home");
const menuButton = generateTextElement("button", "button button-menu", "Menu");
const contactButton = generateTextElement("button", "button button-contact", "Contact");

// get pages
const homePage = getHomePage();
const menuPage = getMenuPage();
const contactPage = getContactPage();
const pageList = [homePage, menuPage, contactPage];

// this needs refactoring
function setActive(activePage) {
  pageList.forEach((page) => page.classList.remove("active"));

  activePage.classList.add("active");
}

homeButton.addEventListener("click", () => setActive(homePage));

menuButton.addEventListener("click", () => setActive(menuPage));

contactButton.addEventListener("click", () => setActive(contactPage));

navbar.append(homeButton, menuButton, contactButton);

// Append elements to content page
content.append(title, navbar);

content.append(homePage, menuPage, contactPage);
