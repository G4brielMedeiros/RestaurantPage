export function generateTextElement(documentType, classList, textContent) {
  const element = document.createElement(documentType);
  element.textContent = textContent;
  element.classList = classList;

  return element;

}