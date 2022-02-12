import breadImg from '../images/breadsByPixabay.jpg';
import { generateTextElement, generateImageElement, generateEmptyDiv } from '../functions/elementGenerator';

export default function getHomePage() {
  const page = generateEmptyDiv("home page");

  const desc1 = generateTextElement("h2", "description", "This is the place that sells bread");
  const desc2 = generateTextElement("h2", "description", "We're very excited to offer you tons of bread, and a little butter to go along");
  const desc3 = generateTextElement("h2", "description", "This bread place has been in business for over 15000 years. That's right, we're older than civilization.");
  const bread = generateImageElement("background", breadImg);

  page.append(desc1, desc2, desc3, bread);

  return page;
}


