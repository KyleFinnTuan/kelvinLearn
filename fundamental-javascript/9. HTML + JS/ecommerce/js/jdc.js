import { users } from '../../database/dummy.js';


document.addEventListener('DOMContentLoaded', () => {
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

  // Render Dashboard
  renderDashboard();
})

const fetchProducts = async (category) => {
  try {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.log(response);
      throw new Error(`Something went wrong when fetching ${url}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

const renderCard = (container, card, products) => {
  container.innerHTML = ''

  products.slice(0, 3).forEach((clothing) => {
    const clonedClothingCard = card.cloneNode(true);

    clonedClothingCard.querySelector('h4').innerText = clothing.title;
    clonedClothingCard.querySelector('p').querySelector('span').innerText = clothing.price;
    clonedClothingCard.querySelector('img').src = clothing.image;
    clonedClothingCard.querySelector('img').style.width = '250px';

    container.appendChild(clonedClothingCard);
  })
}

const renderDashboard = async () => {
  try {
    const menClothings = await fetchProducts(`men's%20clothing`);
    const womenClothings = await fetchProducts(`women's%20clothing`);
    const electronics = await fetchProducts(`electronics`);
    const jewelry = await fetchProducts(`jewelery`);

    const mixedClothings = [...menClothings, ...womenClothings];
    
    const clothingContainer = document.querySelector('[fetched-products=wrapper]');
    const clothingCard = document.querySelector('[fetched-products=item]').cloneNode(true);
    
    const electronicsContainer = document.querySelector('#electronic_main_slider').querySelector('.row');
    const electronicsCard = document.querySelector('.box_main').parentElement.cloneNode(true);

    const jeweleryContainer = document.querySelector('#jewellery_main_slider').querySelector('.row');
    const jeweleryCard = document.querySelector('.box_main').parentElement.cloneNode(true);

    renderCard(clothingContainer, clothingCard, mixedClothings);
    renderCard(electronicsContainer, electronicsCard, electronics);
    renderCard(jeweleryContainer, jeweleryCard, jewelry);
  } catch (error) {
    console.log(error);
  }
}