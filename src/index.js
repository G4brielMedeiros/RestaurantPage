import pageLoad from "./pages/pageDemo";
import getHomePage from "./pages/homePage";
import { generateTextElement, generateEmptyDiv } from "./functions/elementGenerator";
import getMenuPage from "./pages/menuPage";
import getContactPage from "./pages/contactPage";
import './style.css'

const content = document.getElementById("content");
const title = generateTextElement("h1", "title", "The Bakery");

// construct navbar
const navbar = generateEmptyDiv("navbar");
const homeButtonX = generateTextElement("button", "button button-home", "Home");
const menuButtonX = generateTextElement("button", "button button-menu", "Menu");
const contactButtonX = generateTextElement("button", "button button-contact", "Contact");

const homeButton = generateEmptyDiv("button button-home");
homeButton.appendChild(homeButtonX);

const menuButton = generateEmptyDiv("button button-menu");
menuButton.appendChild(menuButtonX);

const contactButton = generateEmptyDiv("button button-contact");
contactButton.appendChild(contactButtonX);

// get pages
const homePage = getHomePage();
const menuPage = getMenuPage();
const contactPage = getContactPage();
const pageList = [homePage, menuPage, contactPage];

// this needs refactoring
function setActive(activePage) {
  pageList.forEach((page) => page.classList.add("hide"));

  activePage.classList.remove("hide");
}

homeButton.addEventListener("click", () => setActive(homePage));

menuButton.addEventListener("click", () => setActive(menuPage));

contactButton.addEventListener("click", () => setActive(contactPage));

navbar.append(homeButton, menuButton, contactButton);

// Append elements to content page
content.append(title, navbar);

content.append(homePage, menuPage, contactPage);
