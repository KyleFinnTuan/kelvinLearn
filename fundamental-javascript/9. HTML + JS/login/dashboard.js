import { users } from '../database/dummy.js';

document.querySelector('#logout-button').addEventListener('click', () => {
  window.location.href = 'login.html';
})

document.addEventListener('DOMContentLoaded', () => {
  const biodataName = document.querySelector('#biodata-name');
  const biodataAge = document.querySelector('#biodata-age');
  const biodataHobby = document.querySelector('#biodata-hobby');
  const biodataAddress = document.querySelector('#biodata-address');

  const loggedInUserEmail = localStorage.getItem('email');
  
  const currentUser = users.find((user) => user.email === loggedInUserEmail);
  console.log(currentUser);
  
  biodataName.innerText = `Nama: ${currentUser.firstName} ${currentUser.lastName}`;
  biodataAge.innerText = `Umur: ${currentUser.age}`;
  biodataHobby.innerText = `Hobi: ${currentUser.hobby}`;
  biodataAddress.innerText = `Tempat Tinggal: ${currentUser.address.city}`;
})