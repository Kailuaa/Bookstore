import { handleLinkClick } from "../../router/handle-link-click";
import { ROUTES } from "../../router/routes";

export default function renderAbout(): HTMLElement {
  const page = document.createElement("div");
  page.classList.add("about");

  const hero = document.createElement("section");
  hero.classList.add("about__hero");

  const heroTitle = document.createElement("h1");
  heroTitle.textContent = "A better way to discover books";

  const heroDescription = document.createElement("p");
  heroDescription.textContent =
    "Find your next favorite read in our carefully selected collection of books";

  const exploreButton = document.createElement("a");
  exploreButton.textContent = "Explore books →";
  exploreButton.href = ROUTES.CATALOG;

  exploreButton.addEventListener("click", (event) => {
    handleLinkClick(event, ROUTES.CATALOG);
  });

  hero.append(heroTitle, heroDescription, exploreButton);

  const benefits = document.createElement("section");
  benefits.classList.add("about__benefits");

  const benefitsTitle = document.createElement("h2");
  benefitsTitle.textContent = "WHY BOOKSTORE";

  const benefitsGrid = document.createElement("div");
  benefitsGrid.classList.add("about__benefits-grid");

  const allBenefits = [
    {
      title: "Curated collection",
      description: "Discover books selected for every kind of reader.",
    },
    {
      title: "Easy shopping",
      description: "Find and explore books with a simple shopping experience.",
    },
    {
      title: "Books for everyone",
      description: "Explore different genres and discover something new.",
    },
  ];

  allBenefits.forEach((benefit) => {
    const article = document.createElement("article");
    article.classList.add("about__benefit");

    const h3 = document.createElement("h3");
    h3.textContent = benefit.title;

    const p = document.createElement("p");
    p.textContent = benefit.description;

    article.append(h3, p);
    benefitsGrid.append(article);
  });

  benefits.append(benefitsTitle, benefitsGrid);

  const cta = document.createElement("section");
  cta.classList.add("about__cta");

  const ctaTitle = document.createElement("h2");
  ctaTitle.textContent = "Your next favorite book awaits";

  const catalogButton = document.createElement("a");
  catalogButton.textContent = "Browse catalog →";
  catalogButton.href = ROUTES.CATALOG;

  catalogButton.addEventListener("click", (event) => {
    handleLinkClick(event, ROUTES.CATALOG);
  });

  cta.append(ctaTitle, catalogButton);
  page.append(hero, benefits, cta);

  return page;
}
