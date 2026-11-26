import type IBook from "../../types/book";
import renderBookCard from "../utils/render-book-card";

export default function renderCatalog(books: IBook[]): HTMLElement {
  const catalog = document.createElement("section");
  catalog.classList.add("catalog");

  const header = document.createElement("div");
  header.classList.add("catalog__header");

  const catalogTitle = document.createElement("h1");
  catalogTitle.textContent = "Explore our books";

  const catalogDescription = document.createElement("p");
  catalogDescription.textContent = "Discover your next favorite read";

  header.append(catalogTitle, catalogDescription);

  const grid = document.createElement("div");
  grid.classList.add("catalog__grid");

  const bookCards = books.map((book) => renderBookCard(book));

  grid.append(...bookCards);

  catalog.append(header, grid);

  return catalog;
}
