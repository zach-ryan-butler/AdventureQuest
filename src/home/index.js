import makeUser from './make-user.js';
import api from '../services/api.js';

const trainerInfo = document.getElementById('trainer-info');

trainerInfo.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(trainerInfo);
    const user = makeUser(formData);

    api.saveUser(user);

    window.location = '../../map.html';
});