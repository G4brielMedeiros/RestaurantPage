import {
  generateTextElement,
  generateImageElement,
  generateEmptyDiv,
} from "../functions/elementGenerator";
import breadImg from "../images/breadsByPixabay.jpg";

export default function getHomePage() {
  const page = generateEmptyDiv("home page");

  const desc1 = generateTextElement(
    "h2",
    "description",
    "This is the place that sells bread"
  );
  const desc2 = generateTextElement(
    "p",
    "description",
    "We're very excited to offer you tons of bread, and a little butter to go along"
  );
  const desc3 = generateTextElement(
    "p",
    "description",
    "This bread place has been in business for over 15000 years. That's right, we're older than civilization."
  );
  const bread = generateImageElement("bakery", breadImg);

  page.append(desc1, desc2, desc3, bread);

  return page;
}
