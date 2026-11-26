import type IBook from "../../types/book";

export default function renderBookCard(book: IBook): HTMLElement {
  const card = document.createElement("article");
  card.classList.add("book-card");

  const image = document.createElement("div");
  image.classList.add("book-card__image");

  const img = document.createElement("img");
  img.src = book.image;
  img.alt = book.name;

  image.append(img);

  const info = document.createElement("div");
  info.classList.add("book-card__info");

  const infoTitle = document.createElement("h3");
  infoTitle.classList.add("book-card__title");
  infoTitle.textContent = book.name;

  const infoAuthor = document.createElement("p");
  infoAuthor.classList.add("book-card__author");
  infoAuthor.textContent = book.author;

  const bottom = document.createElement("div");
  bottom.classList.add("book-card__bottom");

  const price = document.createElement("span");
  price.classList.add("book-card__price");
  price.textContent = `$${book.price.toFixed(2)}`;

  const addToCartButton = document.createElement("button");
  addToCartButton.type = "button";
  addToCartButton.classList.add("book-card__button");
  addToCartButton.textContent = "Add to cart";

  bottom.append(price, addToCartButton);
  info.append(infoTitle, infoAuthor, bottom);
  card.append(image, info);

  return card;
}
