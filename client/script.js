const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const signInForm = document.querySelector('.form-sigin');
const signUpForm = document.querySelector('.form-signup');

const baseUrl = 'http://localhost:3001';

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));


signInForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const login = evt.target.login.value;
    const password = evt.target.password.value;

    const response = await fetch(baseUrl + '/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({login, password})
    });

    const data = await response.json();
    if (data.error) {
        alert(data.error);
    } else {
        window.location.href = './requests.html';
    }
});


signUpForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const username = evt.target.login.value;
    const password = evt.target.password.value;
    const name = evt.target.name.value;

    const response = await fetch(baseUrl + '/auth', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    });

    const data = await response.json();
    if (data.error) {
        alert(data.error);
    } else {
        window.location.href = './requests.html';
    }
});

