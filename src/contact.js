const container = document.querySelector("#content");

const contacts = {
  contact1: {
    name: "hotdog man 1",
    job: "microwave operator",
    phone: "123-456-7890",
    email: "john123@hotdog.com",
  },
};

Object.defineProperty(contacts, "length", {
  enumerable: false,
  value: function () {
    let count = 0;
    for (const item in this) {
      count += 1;
    }
    return count;
  },
});

function addContact(name, job, phone, email) {
  const obj = { name, job, phone, email };
  const objKey = `contact${contacts.length() + 1}`;
  Object.assign(contacts, { [objKey]: { ...obj } });
}

function createTitle() {
  const title = document.createElement("h1");
  title.textContent = "Contacts";
  title.className = "contacts-title";
  container.appendChild(title);
}

function createContent() {
  for (const contact in contacts) {
    const contactContainer = document.createElement("div");
    const name = document.createElement("h2");
    name.textContent = `${contacts[contact].name}`;

    const list = document.createElement("ul");
    for (const key in contacts[contact]) {
      if (key.toString() !== "name") {
        const listItem = document.createElement("li");
        listItem.textContent = contacts[contact][key];
        list.appendChild(listItem);
      }
    }

    contactContainer.append(name, list);
    container.appendChild(contactContainer);
  }
}

function initContact() {
  createTitle();
  createContent();
  container.className = "contact-content";
}

export { initContact };
