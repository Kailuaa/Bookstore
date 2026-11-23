import renderHeader from "./view/components/render-header";
import renderFooter from "./view/components/render-footer";
import renderPage from "./view/utils/render-page";

const body = document.body;
const header = renderHeader();
const main = document.createElement("main");
const footer = renderFooter();

body.append(header, main, footer);

renderPage();

window.addEventListener("popstate", renderPage);
