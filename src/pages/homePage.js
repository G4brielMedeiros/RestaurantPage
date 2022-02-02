import breadImg from '../images/breadsByPixabay.jpg';

export default function getHomePage() {
  const homePage = document.createElement("div");

  const title = document.createElement("h1");
  const desc1 = document.createElement("h2");
  const desc2 = document.createElement("h2");
  const desc3 = document.createElement("h2");
  const bread = new Image();

  title.textContent = "The Bakery";
  desc1.textContent = "This is the place that sells bread";
  desc2.textContent = "We're very excited to offer you tons of bread, and a little butter to go along";
  desc3.textContent = "This bread place has been in business for over 15000 years. That's right, we're older than civilization. We invented bread, so shut up and buy";
  bread.src = breadImg;

  title.classList = "title";
  desc1.classList = "description";
  desc2.classList = "description";
  desc3.classList = "description";
  bread.classList = "background";

  homePage.appendChild(title);
  homePage.appendChild(desc1);
  homePage.appendChild(desc2);
  homePage.appendChild(desc3);
  homePage.appendChild(bread);

  return homePage;
}
