import renderCatalog from "../pages/render-catalog";
import renderCart from "../pages/render-cart";
import renderAbout from "../pages/render-about";
import { ROUTES } from "../../router/routes";
import { books } from "../../data/books";

export default function renderPage(): void {
  const main = document.querySelector("main");

  if (!main) return;

  const path = window.location.pathname;
  let page: HTMLElement;

  switch (path) {
    case ROUTES.ABOUT:
      page = renderAbout();
      break;
    case ROUTES.CATALOG:
      page = renderCatalog(books);
      break;
    case ROUTES.CART:
      page = renderCart();
      break;
    default:
      page = document.createElement("p");
      page.textContent = "404 - page not found";
  }

  main.replaceChildren(page);
}
