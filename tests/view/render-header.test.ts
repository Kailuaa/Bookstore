import { describe, it, expect, vi, beforeEach } from "vitest";
import renderHeader from "../../src/view/components/render-header";
import navigate from "../../src/router/navigate";

vi.mock("../../src/router/navigate", () => ({
  default: vi.fn(),
}));

describe("renderHeader", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return a header element", () => {
    const header = renderHeader();

    expect(header.tagName).toBe("HEADER");
  });
  it("should contain a nav element", () => {
    const header = renderHeader();
    const nav = header.querySelector("nav");

    expect(nav).not.toBeNull();
  });
  it("should contain 3 navigation links", () => {
    const header = renderHeader();
    const links = header.querySelectorAll("nav a");

    expect(links.length).toBe(3);
  });
  it("should have the right href", () => {
    const header = renderHeader();
    const links = header.querySelectorAll("nav a");

    expect(links[0].getAttribute("href")).toBe("/");
    expect(links[1].getAttribute("href")).toBe("/catalog");
    expect(links[2].getAttribute("href")).toBe("/cart");
  });
  it("should navigate to catalog on click", () => {
    const header = renderHeader();
    const link = header.querySelector('a[href="/catalog"]');

    if (!link) throw new Error("Catalog link not found");

    link.dispatchEvent(new MouseEvent("click", { bubbles: true, button: 0 }));

    expect(navigate).toHaveBeenCalledExactlyOnceWith("/catalog");
  });
  it("should navigate to cart on click", () => {
    const header = renderHeader();
    const link = header.querySelector('a[href="/cart"]');

    if (!link) throw new Error("Cart link not found");

    link.dispatchEvent(new MouseEvent("click", { bubbles: true, button: 0 }));

    expect(navigate).toHaveBeenCalledExactlyOnceWith("/cart");
  });
});
