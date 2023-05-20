const container = document.querySelector("#content");
const header = document.createElement("div");
const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");

function createHeader() {
  container.appendChild(header);
  header.classList.add("header");
}

function createButtons() {
  header.append(homeBtn, menuBtn, contactBtn);
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
