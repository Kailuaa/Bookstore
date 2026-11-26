import { handleLinkClick } from "../../router/handle-link-click";
import { ROUTES } from "../../router/routes";

export default function renderHeader(): HTMLElement {
  const header = document.createElement("header");
  header.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("header__container");

  const logo = document.createElement("a");
  logo.classList.add("header__logo");
  logo.textContent = "BOOKSTORE";
  logo.href = ROUTES.ABOUT;

  logo.addEventListener("click", (event) => {
    handleLinkClick(event, ROUTES.ABOUT);
  });

  const nav = document.createElement("nav");
  nav.classList.add("header__nav");

  const links = [
    { title: "About Us", path: ROUTES.ABOUT },
    { title: "Catalog", path: ROUTES.CATALOG },
    { title: "Cart", path: ROUTES.CART },
  ];

  links.forEach((link) => {
    const a = document.createElement("a");
    a.classList.add("header__link");
    a.textContent = link.title;
    a.href = link.path;

    a.addEventListener("click", (event) => {
      handleLinkClick(event, link.path);
    });

    nav.append(a);
  });

  container.append(logo, nav);
  header.append(container);

  return header;
}
