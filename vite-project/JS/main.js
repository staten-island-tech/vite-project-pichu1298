import "../CSS/style.css";
import { petCareItems } from "./products.js";

// const cat = petCareItems.forEach(petCareItems.animal === "Cat");

// const hamster = petCareItems.forEach(petCareItems.animal === "Hamster");

// const fish = petCareItems.forEach(petCareItems.animal === "Fish");

// const rabbit = petCareItems.forEach(petCareItems.animal === "Rabbit");

// const bird = petCareItems.forEach(petCareItems.animal === "Bird");

// const belowTenDollars = petCareItems.forEach(petCareItems.price < 10);

// const between10and20Dollars = petCareItems.forEach(
//   petCareItems.price > 10 && petCareItems.price < 20
// );

// const over20Dollars = petCareItems.forEach(petCareItems.price > 20);

// const fromAmazon = petCareItems.forEach(petCareItems.stores === "Amazon");

// const fromPetco = petCareItems.forEach(petCareItems.stores === "Petco");

// const fromChewy = petCareItems.forEach(petCareItems.stores === "Chewy");

// const fromPetSmart = petCareItems.forEach(petCareItems.stores === "PetSmart");

const DOMSelectors = {
  header: document.querySelectorAll("h1"),
  description: document.querySelectorAll(".card-desc"),
  items: document.querySelectorAll("li"),
  container: document.querySelector(".container"),
  card: document.querySelectorAll(".card"),
};
for (let i = 0; i < petCareItems.length; i++) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
<h1>${petCareItems[i].title}</h1>
<img src="${petCareItems[i].image_url}" alt="${petCareItems[i].alt_text}">
<ul>
  <li>Price: $${petCareItems[i].price} </li>
  <li>Store(s): ${petCareItems[i].stores}</li>
  <li>Animal(s): ${petCareItems[i].animal}</li>
</ul>
</div>`
  );
}

const dogItems = petCareItems.filter((item) => item.animal.includes("Dog"));
const hamsterItems = petCareItems.filter((item) =>
  item.animal.includes("Hamster")
);
const catItems = petCareItems.filter((item) => item.animal.includes("Cat"));
const birdItems = petCareItems.filter((item) => item.animal.includes("Bird"));
const rabbitItems = petCareItems.filter((item) =>
  item.animal.includes("Rabbit")
);
const fishItems = petCareItems.filter((item) => item.animal.includes("Fish"));

// const dog = petCareItems.map((dog) => dog.animal);

// const dog = petCareItems.filter(animalDog);
// function animalDog() {
//   petCareItems.animal === "Dog";
// }
// console.log(dog);

// // petCareItems.filter((dog) => petCareItems.animal.includes("Dog"));

function createdSorted() {
  document.querySelector(".container").innerHTML = "";
  //load new array
}

let dogButton = document.querySelector("#dogButton");
dogButton.addEventListener("click", function (event) {
  event.preventDefault();
  createdSorted();
  dogItems.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "warm">
    <h1>${item.title}</h1>
    <img src="${item.image_url}" alt="${item.alt_text}">
    <ul>
      <li>Price: $${item.price} </li>
      <li>Store(s): ${item.stores}</li>
      <li>Animal(s): ${item.animal}</li>
    </ul>
    </div>`
    );
  });
});

let catButton = document.querySelector("#catButton");
catButton.addEventListener("click", function (event) {
  event.preventDefault();
  createdSorted();
  catItems.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "warm">
    <h1>${item.title}</h1>
    <img src="${item.image_url}" alt="${item.alt_text}">
    <ul>
      <li>Price: $${item.price} </li>
      <li>Store(s): ${item.stores}</li>
      <li>Animal(s): ${item.animal}</li>
    </ul>
    </div>`
    );
  });
});

let hamsterButton = document.querySelector("#hamsterButton");
hamsterButton.addEventListener("click", function (event) {
  event.preventDefault();
  createdSorted();
  hamsterItems.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card">
    <h1>${item.title}</h1>
    <img src="${item.image_url}" alt="${item.alt_text}">
    <ul>
      <li>Price: $${item.price} </li>
      <li>Store(s): ${item.stores}</li>
      <li>Animal(s): ${item.animal}</li>
    </ul>
    </div>`
    );
  });
});

let birdButton = document.querySelector("#birdButton");
birdButton.addEventListener("click", function (event) {
  event.preventDefault();
  createdSorted();
  birdItems.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card">
    <h1>${item.title}</h1>
    <img src="${item.image_url}" alt="${item.alt_text}">
    <ul>
      <li>Price: $${item.price} </li>
      <li>Store(s): ${item.stores}</li>
      <li>Animal(s): ${item.animal}</li>
    </ul>
    </div>`
    );
  });
});

let rabbitButton = document.querySelector("#rabbitButton");
rabbitButton.addEventListener("click", function (event) {
  event.preventDefault();
  createdSorted();
  rabbitItems.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card">
    <h1>${item.title}</h1>
    <img src="${item.image_url}" alt="${item.alt_text}">
    <ul>
      <li>Price: $${item.price} </li>
      <li>Store(s): ${item.stores}</li>
      <li>Animal(s): ${item.animal}</li>
    </ul>
    </div>`
    );
  });
});

let fishButton = document.querySelector("#fishButton");
fishButton.addEventListener("click", function (event) {
  event.preventDefault();
  createdSorted();
  fishItems.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card">
    <h1>${item.title}</h1>
    <img src="${item.image_url}" alt="${item.alt_text}">
    <ul>
      <li>Price: $${item.price} </li>
      <li>Store(s): ${item.stores}</li>
      <li>Animal(s): ${item.animal}</li>
    </ul>
    </div>`
    );
  });
});

const fromPetco = petCareItems.filter((item) => item.stores.includes("Petco"));

let petcoButton = document.querySelector("#petco");
petcoButton.addEventListener("click", function (event) {
  event.preventDefault();
  createdSorted();
  fromPetco.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card">
    <h1>${item.title}</h1>
    <img src="${item.image_url}" alt="${item.alt_text}">
    <ul>
      <li>Price: $${item.price} </li>
      <li>Store(s): ${item.stores}</li>
      <li>Animal(s): ${item.animal}</li>
    </ul>
    </div>`
    );
  });
});

const fromAmazon = petCareItems.filter((item) =>
  item.stores.includes("Amazon")
);

let amazonButton = document.querySelector("#amazon");
amazonButton.addEventListener("click", function (event) {
  event.preventDefault();
  createdSorted();
  fromAmazon.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card">
    <h1>${item.title}</h1>
    <img src="${item.image_url}" alt="${item.alt_text}">
    <ul>
      <li>Price: $${item.price} </li>
      <li>Store(s): ${item.stores}</li>
      <li>Animal(s): ${item.animal}</li>
    </ul>
    </div>`
    );
  });
});

const fromChewy = petCareItems.filter((item) => item.stores.includes("Chewy"));

let chewyButton = document.querySelector("#chewy");
chewyButton.addEventListener("click", function (event) {
  event.preventDefault();
  createdSorted();
  fromChewy.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card">
    <h1>${item.title}</h1>
    <img src="${item.image_url}" alt="${item.alt_text}">
    <ul>
      <li>Price: $${item.price} </li>
      <li>Store(s): ${item.stores}</li>
      <li>Animal(s): ${item.animal}</li>
    </ul>
    </div>`
    );
  });
});

const fromPetSmart = petCareItems.filter((item) =>
  item.stores.includes("PetSmart")
);

let petSmartButton = document.querySelector("#petSmart");
petSmartButton.addEventListener("click", function (event) {
  event.preventDefault();
  createdSorted();
  fromPetSmart.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card">
    <h1>${item.title}</h1>
    <img src="${item.image_url}" alt="${item.alt_text}">
    <ul>
      <li>Price: $${item.price} </li>
      <li>Store(s): ${item.stores}</li>
      <li>Animal(s): ${item.animal}</li>
    </ul>
    </div>`
    );
  });
});

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function (event) {
  event.preventDefault();
  createdSorted();
  for (let i = 0; i < petCareItems.length; i++) {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "warm">
  <h1>${petCareItems[i].title}</h1>
  <img src="${petCareItems[i].image_url}" alt="${petCareItems[i].alt_text}">
  <ul>
    <li>Price: $${petCareItems[i].price} </li>
    <li>Store(s): ${petCareItems[i].stores}</li>
    <li>Animal(s): ${petCareItems[i].animal}</li>
  </ul>
  </div>`
    );
  }
});

let coldColor = document.querySelector("#coldColor");

coldColor.addEventListener("submit", function (event) {
  event.preventDefault();
  DOMSelectors.card.innerHTML = "";

  //load new array
});

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
