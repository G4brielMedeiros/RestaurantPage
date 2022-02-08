import breadImg from '../images/breadsByPixabay.jpg';
import { generateTextElement } from '../functions/elementGenerator';

export default function getHomePage() {
  const homePage = document.createElement("div");

  const desc1 = generateTextElement("h2", "description", "This is the place that sells bread");
  const desc2 = generateTextElement("h2", "description", "We're very excited to offer you tons of bread, and a little butter to go along");
  const desc3 = generateTextElement("h2", "description", "This bread place has been in business for over 15000 years. That's right, we're older than civilization.");
  
  const bread = new Image();
  bread.src = breadImg;
  bread.classList = "background";

  homePage.append(desc1, desc2, desc3, bread);

  return homePage;
}


