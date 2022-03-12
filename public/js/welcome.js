const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

const getForm = async event => {
    event.preventDefault();
    const route = event.target.value;

    window.location.href = `/${route}`;
};

loginBtn.addEventListener('click', getForm);
signupBtn.addEventListener('click', getForm);