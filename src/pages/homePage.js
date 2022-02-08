import breadImg from '../images/breadsByPixabay.jpg';

export default function getHomePage() {
  const homePage = document.createElement("div");

  const title = generateElement("h1", "title", "The Bakery");
  const desc1 = generateElement("h2", "description", "This is the place that sells bread");
  const desc2 = generateElement("h2", "description", "We're very excited to offer you tons of bread, and a little butter to go along");
  const desc3 = generateElement("h2", "description", "This bread place has been in business for over 15000 years. That's right, we're older than civilization.");
  
  const bread = new Image();
  bread.src = breadImg;
  bread.classList = "background";

  homePage.appendChild(title);
  homePage.appendChild(desc1);
  homePage.appendChild(desc2);
  homePage.appendChild(desc3);
  homePage.appendChild(bread);

  return homePage;
}

function generateElement(documentType, classList, textContent) {
  const element = document.createElement(documentType);
  element.textContent = textContent;
  element.classList = classList;

  return element;

}
