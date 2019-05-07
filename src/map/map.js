import api from '../services/api.js';

const userName = document.getElementById('profile-name');
const hitPoints = document.getElementById('hp');
const exp = document.getElementById('exp');
const userIcon = document.getElementById('user-icon');

const profileInfo = api.getUser();

if(!profileInfo) {
    window.location = './';
}

userName.textContent = profileInfo.name;
hitPoints.textContent = profileInfo.hp;
exp.textContent = profileInfo.exp;
userIcon.src = './assets/' + profileInfo.pokemon + '.png';