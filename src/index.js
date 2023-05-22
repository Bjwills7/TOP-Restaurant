import { initHeader } from "./header";
import { initHome } from "./home";
import { initMenu } from "./menu";
import { initContact } from "./contact";
import "./style.css";

initHeader();
initHome();

const homeButton = document.querySelector(".homeBtn");
const menuButton = document.querySelector(".menuBtn");
const contactButton = document.querySelector(".contactBtn");

homeButton.addEventListener("click", () => {
  clearContainer();
  initHome();
});
menuButton.addEventListener("click", () => {
  clearContainer();
  initMenu();
});
contactButton.addEventListener("click", () => {
  clearContainer();
  initContact();
});

function clearContainer() {
  const container = document.querySelector("#content");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
