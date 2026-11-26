import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import navigate from "../../src/router/navigate";
import renderPage from "../../src/view/utils/render-page";

vi.mock("../../src/view/utils/render-page", () => ({
  default: vi.fn(),
}));

describe("navigate", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/");
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should update URL when navigating to a different route", () => {
    const pushStateSpy = vi.spyOn(window.history, "pushState");

    navigate("/catalog");

    expect(pushStateSpy).toHaveBeenCalledExactlyOnceWith({}, "", "/catalog");
    expect(window.location.pathname).toBe("/catalog");
  });
  it("should call renderPage after navigation", () => {
    navigate("/catalog");

    expect(renderPage).toHaveBeenCalledOnce();
  });
  it("should not navigate when the route is already active", () => {
    window.history.pushState({}, "", "/catalog");
    const pushStateSpy = vi.spyOn(window.history, "pushState");

    navigate("/catalog");

    expect(pushStateSpy).not.toHaveBeenCalled();
    expect(renderPage).not.toHaveBeenCalledOnce();
  });
});
