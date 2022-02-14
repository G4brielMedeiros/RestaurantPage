import getHomePage from "./pages/homePage";
import { generateTextElement, generateEmptyDiv } from "./functions/elementGenerator";
import getMenuPage from "./pages/menuPage";
import getContactPage from "./pages/contactPage";
import "./style.css";

// construct title
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

// helper function to hide inactive pages and show relevant page
function show(activePage) {
  [homePage, menuPage, contactPage].forEach((page) => page.classList.add("hide"));

  activePage.classList.remove("hide");
}

// helper function to add event listener to show page when clicking a button
function bindPage(button, page) {
  button.addEventListener("click", () => show(page));
}

// adds event listener to every button
bindPage(homeButton, homePage);
bindPage(menuButton, menuPage);
bindPage(contactButton, contactPage);

// Append elements to content page
const content = document.getElementById("content");
navbar.append(homeButton, menuButton, contactButton);
content.append(title, navbar);
content.append(homePage, menuPage, contactPage);

// testing
show(contactPage);
