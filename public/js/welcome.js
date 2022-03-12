const loginBtn = document.getElementById('login-btn');

const login = event => {
    event.preventDefault();

    fetch('/login').catch(err => {
        console.log('oh no');
    });
};

loginBtn.addEventListener('click', login);

