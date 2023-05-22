import { initHeader } from "./header";
import { initHome } from "./home";
import { initMenu } from "./menu";
import "./style.css";

initHeader();
initHome();

const homeButton = document.querySelector(".homeBtn");
const menuButton = document.querySelector(".menuBtn");

homeButton.addEventListener("click", () => {
  clearContainer();
  initHome();
});
menuButton.addEventListener("click", () => {
  clearContainer();
  initMenu();
});

function clearContainer() {
  const container = document.querySelector("#content");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
