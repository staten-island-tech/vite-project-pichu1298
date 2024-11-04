import "../CSS/style.css";
import { petCareItems } from "./products.js";

// const dog = petCareItems.forEach(petCareItems.animal === "Dog");

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

// coldColor = document.querySelector("#coldColor");

// coldColor.addEventListener("submit", function (coldColorFunction) {
//   coldColorFunction.preventDefault();
//   document.insertAdjacentHtml("")
// });

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
