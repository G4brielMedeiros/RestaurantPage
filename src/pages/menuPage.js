//TODO: Implement home page
import breadImg from '../images/breadsByPixabay.jpg';
import { generateTextElement, generateImageElement, generateEmptyDiv } from '../functions/elementGenerator';

export default function getMenuPage() {
  const page = generateEmptyDiv("menu page hide");

  const desc1 = generateTextElement("h2", "description", "This is the menu page");
  const desc2 = generateTextElement("h2", "description", "We're very excited to offer you the menu page");
  const desc3 = generateTextElement("h2", "description", "This bread place has been in business for over 15000 menu pages");
  const bread = generateImageElement("background", breadImg);

  page.append(desc1, desc2, desc3, bread);

  return page;
}


