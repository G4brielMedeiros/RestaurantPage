import bakeryImage from "../images/vvadyab.png";

export default function pageLoad() {
  const mainPage = document.createElement("div");

  const image = new Image();
  const headline = document.createElement("h1");
  const description = document.createElement("p");

  image.src = bakeryImage;
  headline.textContent = "The Bakery";
  description.textContent =
    "This bakery will be the best place you've ever been to.";

  mainPage.appendChild(image);
  mainPage.appendChild(headline);
  mainPage.appendChild(description);

  return mainPage;
}
