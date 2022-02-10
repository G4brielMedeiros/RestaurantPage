export function generateTextElement(documentType, classList, textContent) {
  const element = document.createElement(documentType);
  element.textContent = textContent;
  element.classList = classList;

  return element;
}

export function generateImageElement(classList, src) {
  const image = new Image();
  image.src = src;
  image.classList = classList;

  return image;
}

export function generateEmptyDiv(classList) {
  const div = document.createElement("div");
  div.classList = classList;
  return div;
}
