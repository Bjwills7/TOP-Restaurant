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

function contactCreate(name, job, phone, email) {
  const obj = { name, job, phone, email };
  const objKey = `contact${contacts.length() + 1}`;
  Object.assign(contacts, { [objKey]: { ...obj } });
}

export { contactCreate, contacts };
