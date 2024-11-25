
const element = document.createElement("div");

const newHeader = document.createElement("h1");


newHeader.id = "victory";

// Optionally set its text content
newHeader.textContent = "Melody is the champion ";

// Append it to the DOM
document.body.appendChild(newHeader);

document.body.append(element);
const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }
  element.append(ul);