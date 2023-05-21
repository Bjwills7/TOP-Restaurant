const container = document.querySelector("#content");
const title = document.createElement("h1");

const menuItems = {
  itemOne: {
    name: "Classic",
    image: "./images/exploded-hotdog.jpg",
    description: "The classic microwaved hotdog, perfect for all occasions!",
  },
  itemTwo: {
    name: "Grilled Cheese Dog",
    image: "./images/hotdog-cheese.jpg",
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
  }
}
