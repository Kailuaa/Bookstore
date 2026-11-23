import navigate from "../../router/navigate";
import { ROUTES } from "../../router/routes";

export default function renderHeader(): HTMLElement {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const links = [
    { title: "About Us", path: ROUTES.ABOUT },
    { title: "Catalog", path: ROUTES.CATALOG },
    { title: "Cart", path: ROUTES.CART },
  ];

  links.forEach((link) => {
    const a = document.createElement("a");
    a.textContent = link.title;
    a.href = link.path;

    a.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey === true) return;

      event.preventDefault();
      navigate(link.path);
    });

    nav.append(a);
  });

  header.append(nav);

  return header;
}
