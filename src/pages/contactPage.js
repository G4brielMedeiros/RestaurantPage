//TODO: Implement contact page

import breadImg from '../images/breadsByPixabay.jpg';
import { generateTextElement, generateImageElement, generateEmptyDiv } from '../functions/elementGenerator';

export default function getContactPage() {
  const page = generateEmptyDiv("contact page hide");

  const desc1 = generateTextElement("h2", "description", "This is the place that you contact us");
  const desc2 = generateTextElement("h2", "description", "We're very excited to offer you tons of contact numbers");
  const desc3 = generateTextElement("h2", "description", "This bread place has been in business for over 15000 email addresses");
  const bread = generateImageElement("background", breadImg);

  page.append(desc1, desc2, desc3, bread);

  return page;
}


