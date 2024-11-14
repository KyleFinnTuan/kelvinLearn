import { userDb } from '../database/loginDb.js'

const loginForm = document.querySelector('form');
const usernameInput = loginForm.querySelector('#username');
const passwordInput = loginForm.querySelector('#password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const currentUser = userDb.find((user) => user.email === usernameInput.value);
  
  if (!currentUser) {
    alert('Incorrect username or password');
    return
  }
  
  if (currentUser.password !== passwordInput.value) {
    return alert('Incorrect username or password');
  }

  localStorage.setItem('loginEmail', currentUser.email);
  window.location.href = 'dashboard.html';
  // window.location.replace('dashboard.html');
})