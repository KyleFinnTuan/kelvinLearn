document.querySelector(".jsFilter").addEventListener("click", function () {
  document.querySelector(".filter-menu").classList.toggle("active");
});

document.querySelector(".grid").addEventListener("click", function () {
  document.querySelector(".list").classList.remove("active");
  document.querySelector(".grid").classList.add("active");
  document.querySelector(".products-area-wrapper").classList.add("gridView");
  document
    .querySelector(".products-area-wrapper")
    .classList.remove("tableView");
});

document.querySelector(".list").addEventListener("click", function () {
  document.querySelector(".list").classList.add("active");
  document.querySelector(".grid").classList.remove("active");
  document.querySelector(".products-area-wrapper").classList.remove("gridView");
  document.querySelector(".products-area-wrapper").classList.add("tableView");
});

var modeSwitch = document.querySelector('.mode-switch');
modeSwitch.addEventListener('click', function () {                      document.documentElement.classList.toggle('light');
 modeSwitch.classList.toggle('active');
});

/*
  Personalization
*/

import { userDb } from '../database/loginDb.js'

const currentUserEmail = localStorage.getItem('loginEmail');

const currentUser = userDb.find((user) => user.email === currentUserEmail);
console.log(currentUser);

const userName = document.querySelector('.account-info-name');
userName.innerText = `${currentUser.firstName} ${currentUser.lastName}`

/*
  Logout Feature
*/

const logoutButton = document.querySelector('#logout-button');

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('loginEmail');
  window.location.href = 'login.html';
})