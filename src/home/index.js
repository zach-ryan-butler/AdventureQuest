import makeUser from './make-user.js';

const trainerInfo = document.getElementById('trainer-info');

trainerInfo.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(trainerInfo);
    const user = makeUser(formData);

    console.log(user);
});