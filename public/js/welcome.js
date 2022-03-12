const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

const getForm = async event => {
    event.preventDefault();
    const route = event.target.value;

    await fetch(`/${route}`).catch(err => {
        console.log('oh no');
    });
};

loginBtn.addEventListener('click', getForm);
signupBtn.addEventListener('click', getForm);

