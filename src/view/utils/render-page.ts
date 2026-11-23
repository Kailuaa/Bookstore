import { renderCatalog } from "../pages/render-catalog";
import { renderCart } from "../pages/render-cart";
import { renderAbout } from "../pages/render-about";

export default function renderPage(): void {
  const main = document.querySelector("main");

  if (!main) return;

  const path = window.location.pathname;
  let page: HTMLElement;

  switch (path) {
    case "/":
      page = renderAbout();
      break;
    case "/catalog":
      page = renderCatalog();
      break;
    case "/cart":
      page = renderCart();
      break;
    default:
      page = document.createElement("p");
      page.textContent = "404 - page not found";
  }

  main.replaceChildren(page);
}
