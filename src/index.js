import { initHeader } from "./header";
import { initHome } from "./home";
import { initMenu } from "./menu";
import { initContact } from "./contact";
import { clearContainer } from "./clearContent";
import "./style.css";

initHeader();
initHome();

const container = document.querySelector("#content");
const homeButton = document.querySelector(".homeBtn");
const menuButton = document.querySelector(".menuBtn");
const contactButton = document.querySelector(".contactBtn");

homeButton.addEventListener("click", () => {
  clearContainer(container);
  initHome();
});
menuButton.addEventListener("click", () => {
  clearContainer(container);
  initMenu();
});
contactButton.addEventListener("click", () => {
  clearContainer(container);
  initContact();
});
