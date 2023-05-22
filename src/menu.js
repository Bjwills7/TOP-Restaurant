import explodedHotdog from "./images/exploded-hotdog.jpg";
import hotdogCheese from "./images/hotdog-cheese.jpg";
const container = document.querySelector("#content");
const title = document.createElement("h1");

const menuItems = {
  itemOne: {
    name: "Classic",
    image: explodedHotdog,
    description: "The classic microwaved hotdog, perfect for all occasions!",
  },
  itemTwo: {
    name: "Grilled Cheese Dog",
    image: hotdogCheese,
    description:
      'A delicious "grilled"(microwaved) hotdog wrapped in american cheese and white bread.',
  },
};

function createTitle() {
  container.appendChild(title);
  title.className = "menu-title";
  title.textContent = "Menu";
}

function createMenu() {
  for (const item in menuItems) {
    const itemTitle = document.createElement("h2");
    itemTitle.textContent = menuItems[item].name;
    itemTitle.className = `${item}-title`;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = menuItems[item].description;
    itemDescription.className = `${item}-description`;

    const itemImage = new Image();
    itemImage.src = menuItems[item].image;
    itemImage.className = `${item}-image`;

    const menuItem = document.createElement("div");
    menuItem.append(itemTitle, itemDescription, itemImage);
    container.appendChild(menuItem);
  }
}

function initMenu() {
  createTitle();
  createMenu();
  container.className = "menu-content";
}

export { initMenu };
