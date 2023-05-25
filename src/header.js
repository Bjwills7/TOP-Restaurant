import weiner from "./images/weiner.png";

const body = document.querySelector("body");
const header = document.createElement("div");
const icon = new Image();
icon.src = weiner;
icon.className = "header-icon";
const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");

function createHeader() {
  body.prepend(header);
  header.classList.add("header");
}

function createButtons() {
  header.append(icon, homeBtn, menuBtn, contactBtn);
  homeBtn.classList.add("homeBtn");
  homeBtn.textContent = "Home";
  menuBtn.classList.add("menuBtn");
  menuBtn.textContent = "Menu";
  contactBtn.classList.add("contactBtn");
  contactBtn.textContent = "Contact";
}

function initHeader() {
  createHeader();
  createButtons();
}

export { initHeader };
