import { handleLinkClick } from "../../router/handle-link-click";
import { ROUTES } from "../../router/routes";

export default function renderFooter(): HTMLElement {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const container = document.createElement("div");
  container.classList.add("footer__container");

  const brand = document.createElement("div");
  brand.classList.add("footer__brand");

  const logo = document.createElement("a");
  logo.classList.add("footer__logo");
  logo.textContent = "BOOKSTORE";
  logo.href = ROUTES.ABOUT;

  logo.addEventListener("click", (event) => {
    handleLinkClick(event, ROUTES.ABOUT);
  });

  const copyright = document.createElement("p");
  copyright.textContent = `© ${new Date().getFullYear()} Bookstore`;

  brand.append(logo, copyright);

  const nav = document.createElement("nav");
  nav.classList.add("footer__nav");

  const links = [
    { title: "About Us", path: ROUTES.ABOUT },
    { title: "Catalog", path: ROUTES.CATALOG },
  ];

  links.forEach((link) => {
    const a = document.createElement("a");
    a.classList.add("footer__link");
    a.textContent = link.title;
    a.href = link.path;

    a.addEventListener("click", (event) => {
      handleLinkClick(event, link.path);
    });

    nav.append(a);
  });

  container.append(brand, nav);
  footer.append(container);

  return footer;
}
