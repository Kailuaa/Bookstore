import renderPage from "../view/utils/render-page";

export default function navigate(pathname: string): void {
  if (pathname === window.location.pathname) return;

  window.history.pushState({}, "", pathname);

  renderPage();
}
