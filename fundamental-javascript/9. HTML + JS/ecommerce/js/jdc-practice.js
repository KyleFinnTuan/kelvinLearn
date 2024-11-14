import { users } from '../../database/dummy.js';


document.addEventListener('DOMContentLoaded', async () => {
  // Personalization
  const biodataName = document.querySelector('#biodata-name');

  const loggedInUserEmail = localStorage.getItem('email');
  
  const currentUser = users.find((user) => user.email === loggedInUserEmail);
  console.log(currentUser);
  
  biodataName.innerText = `${currentUser.firstName} ${currentUser.lastName}`;

  // Logout Button Function
  document.querySelector('#logout-button').addEventListener('click', () => {
    window.location.href = '../login/login.html';
  })
  
  const products = await fetchProducts();

  const menClothings = products.filter((product) => product.category === "men's clothing");
  const womenClothings = products.filter((product) => product.category === "women's clothing");
  const electronics = products.filter((product) => product.category === "electronics");
  const jewelery = products.filter((product) => product.category === "jewelery");
  
  const clothingContainer = document.querySelector('[fetched-products=wrapper]');
  const clothingCards = Array.from(clothingContainer.querySelectorAll('.box_main'));
  
  const electronicsContainer = document.querySelector('#electronic_main_slider');
  const electronicsCards = Array.from(electronicsContainer.querySelectorAll('.box_main'));

  const jeweleryContainer = document.querySelector('#jewellery_main_slider');
  const jeweleryCards = Array.from(jeweleryContainer.querySelectorAll('.box_main'));

  renderCards(clothingCards, [...menClothings, ...womenClothings]);
  renderCards(electronicsCards, electronics);
  renderCards(jeweleryCards, jewelery);
})

const renderCards = (cards, products) => {
  cards.forEach((card, index) => {
    if (!products[index]) return;
    card.querySelector('h4').innerText = products[index].title;
    card.querySelector('p').querySelector('span').innerText = products[index].price;
    card.querySelector('img').src = products[index].image;
  })
}

const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) throw new Error('Something went wrong.');

    const products = await response.json();

    return products;
  } catch (error) {
    console.log(error);
  }
}