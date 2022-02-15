//TODO: Implement contact page

import personSrc1 from "../images/person1.jpeg";
import personSrc2 from "../images/person2.jpeg";
import personSrc3 from "../images/person3.jpeg";

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

  const person1 = generateEmptyDiv("person");
  const person2 = generateEmptyDiv("person");
  const person3 = generateEmptyDiv("person");

  const personImg1 = generateImageElement("person-image", personSrc1);
  const personImg2 = generateImageElement("person-image", personSrc2);
  const personImg3 = generateImageElement("person-image", personSrc3);

  const personName1 = generateTextElement("h3", "person-name", "James");
  const personName2 = generateTextElement("h3", "person-name", "Karen");
  const personName3 = generateTextElement("h3", "person-name", "Tracy");

  person1.append(personImg1, personName1);
  person2.append(personImg2, personName2);
  person3.append(personImg3, personName3);

  const people = generateEmptyDiv("contact-items");
  people.append(person1, person2, person3);

  const footer = generateTextElement("p", "footer", "None of us exist.")

  page.append(desc1, people, footer );

  return page;
}
