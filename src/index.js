import pageLoad from "./pages/pageDemo";
import getHomePage from "./pages/homePage";
import { generateTextElement, generateEmptyDiv } from "./functions/elementGenerator";

const content = document.getElementById("content");
const title = generateTextElement("h1", "title", "The Bakery");

//TODO: Implement tab-switching logic

// Construct navbar
const navbar = generateEmptyDiv();
const homeButton = generateTextElement("button", "button button-home", "Home");
const menuButton = generateTextElement("button", "button button-menu", "Menu");
const contactButton = generateTextElement("button", "button button-contact", "Contact");
navbar.append(homeButton, menuButton, contactButton);

// Append elements to content page
content.appendChild(title);
content.appendChild(navbar);
content.appendChild(getHomePage());

