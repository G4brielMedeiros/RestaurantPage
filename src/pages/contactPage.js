//TODO: Implement contact page

import breadImg from "../images/breadsByPixabay.jpg";
import {
  generateTextElement,
  generateImageElement,
  generateEmptyDiv,
} from "../functions/elementGenerator";

export default function getContactPage() {
  const page = generateEmptyDiv("contact page hide");

  const desc1 = generateTextElement(
    "h2",
    "description",
    "This is the place that you contact us"
  );
  const bread = generateImageElement("bakery", breadImg);

  page.append(desc1, bread);

  return page;
}
