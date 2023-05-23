import { clearContainer } from "./clearContent";

const container = document.querySelector("#content");
const title = document.createElement("h1");

const sectionOne = document.createElement("div");
const sectionOnePara = document.createElement("p");
const sectionOneTitle = document.createElement("h3");

const sectionTwo = document.createElement("div");
const sectionTwoTitle = document.createElement("h2");
const list = document.createElement("ul");
const listElements = {
  Mon: "8am - 10pm",
  Tue: "8am  - 9pm",
  Wed: "8am - 9pm",
  Thu: "10am - 10pm",
  Fri: "8am - 12pm",
  Sat: "8am - 12pm",
  Sun: "11am - 4pm",
};

function createTitle() {
  container.appendChild(title);
  title.classList.add("home-title");
  title.textContent = "Glizzy Factory";
}

function createSectionOne() {
  container.appendChild(sectionOne);
  sectionOne.classList.add("section-one");
  sectionOne.appendChild(sectionOnePara);
  sectionOnePara.classList.add("section-one-para");
  sectionOnePara.textContent =
    "Glizzy Factory microwaves a hotdog better than anyone else";
  sectionOne.appendChild(sectionOneTitle);
  sectionOneTitle.classList.add("sectionOneTitle");
  sectionOneTitle.textContent = "Glizzy Goblin";
}

function createSectionTwo() {
  container.appendChild(sectionTwo);
  sectionTwo.classList.add("section-two");
  sectionTwo.appendChild(sectionTwoTitle);
  sectionTwoTitle.classList.add("section-two-title");
  sectionTwoTitle.textContent = "Hours of Operation";
  clearContainer(list);
  sectionTwo.appendChild(list);

  for (const day in listElements) {
    let listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.textContent = `${day}: ${listElements[day]}`;
  }
}

function initHome() {
  createTitle();
  createSectionOne();
  createSectionTwo();
  container.className = "home-content";
}

export { initHome };
