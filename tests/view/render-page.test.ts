import { describe, it, expect, vi, beforeEach } from "vitest";
import renderPage from "../../src/view/utils/render-page";

vi.mock("../../src/view/pages/render-about", () => ({
  renderAbout: () => {
    const page = document.createElement("section");
    page.id = "about";
    return page;
  },
}));
vi.mock("../../src/view/pages/render-cart", () => ({
  renderCart: () => {
    const page = document.createElement("section");
    page.id = "cart";
    return page;
  },
}));
vi.mock("../../src/view/pages/render-catalog", () => ({
  renderCatalog: () => {
    const page = document.createElement("section");
    page.id = "catalog";
    return page;
  },
}));

describe("render-page", () => {
  beforeEach(() => {
    document.body.innerHTML = "<main></main>";
    window.history.replaceState({}, "", "/");
  });

  it("should render About Us on the root route", () => {
    renderPage();

    console.log(document.querySelector("main")?.outerHTML);
    expect(document.querySelector("main #about")).not.toBeNull();
  });
  it("should render Catalog on /catalog", () => {
    window.history.replaceState({}, "", "/catalog");

    renderPage();

    expect(document.querySelector("main #catalog")).not.toBeNull();
  });
  it("should render Cart on /cart", () => {
    window.history.replaceState({}, "", "/cart");

    renderPage();

    expect(document.querySelector("main #cart")).not.toBeNull();
  });
  it("should render 404 on /unknown", () => {
    window.history.replaceState({}, "", "/unknown");

    renderPage();

    expect(document.querySelector("main")?.textContent).toContain("404");
  });
  it("should replace the previous page", () => {
    renderPage();

    expect(document.querySelector("#about")).not.toBeNull();

    window.history.replaceState({}, "", "/catalog");

    renderPage();

    expect(document.querySelector("#about")).toBeNull();
    expect(document.querySelector("#catalog")).not.toBeNull();
    expect(document.querySelector("main")?.children).toHaveLength(1);
  });
});
