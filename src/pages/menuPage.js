import {
  generateTextElement,
  generateImageElement,
  generateEmptyDiv,
} from "../functions/elementGenerator";
import bananaBread from "../images/banana-bread-JernajaR.jpg";
import croissant from "../images/croissant-Photowill.jpg";
import cappuccino from "../images/cappuccino-gadost0.jpg";

export default function getMenuPage() {
  const page = generateEmptyDiv("menu page hide");

  const desc1 = generateTextElement("h2", "description", "This is the menu page");
  const desc2 = generateTextElement("p", "description", "Check it out");

  const item1 = generateEmptyDiv("item");
  const item2 = generateEmptyDiv("item");
  const item3 = generateEmptyDiv("item");

  const image1 = generateImageElement("item-image", bananaBread);
  const image2 = generateImageElement("item-image", croissant);
  const image3 = generateImageElement("item-image", cappuccino);

  const legend1 = generateTextElement("p", "item-legend", "Banana Bread - $139.99");
  const legend2 = generateTextElement("p", "item-legend", "Croissant (unit) - $269.99");
  const legend3 = generateTextElement("p", "item-legend", "Cappuccino - $49.99");

  item1.append(image1, legend1);
  item2.append(image2, legend2);
  item3.append(image3, legend3);

  const items = generateEmptyDiv("menu-items");
  items.append(item1, item2, item3);

  page.append(desc1, desc2, items);

  return page;
}
