import pageLoad from "./pages/pageDemo";
import getHomePage from "./pages/homePage";

const content = document.getElementById("content");
console.log(content);
content.appendChild(getHomePage());

//TODO: Implement tab-switching logic
