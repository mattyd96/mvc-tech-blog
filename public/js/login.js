const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

const handleErrors = err => {
    //get error message divs
    const emailErr = document.querySelector('#email-error');
    const passErr = document.querySelector('#password-error');
    const usernameErr = document.querySelector('#username-error');
    const loginErr = document.querySelector('#login-error');

    // remove any existing error messages
    emailErr.classList.add('hidden');
    passErr.classList.add('hidden');
    usernameErr.classList.add('hidden');
    loginErr.classList.add('hidden');

    // get errorlist constructed on backend
    const errors = err.errorList;

    // loop through each error and update view
    errors.forEach(error => {
        if(error === 'email') {
            emailErr.textContent = 'Please enter a valid email';
            emailErr.classList.remove('hidden');
        }
        if(error === 'password') {
            passErr.textContent = 'Please enter a password over 8 characters long';
            passErr.classList.remove('hidden');
        }
        if(error === 'username exists') { 
            usernameErr.textContent = 'This username is taken';
            usernameErr.classList.remove('hidden');
        }
        if(error === 'email exists') {
            emailErr.textContent = 'There is already an account with this email';
            emailErr.classList.remove('hidden');
        }
        if(error === 'no user' || error === 'incorrect password') {
            loginErr.classList.remove('hidden');
        }
    });
};

const signup = async (event) => {
  event.preventDefault();

  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    const response = await fetch("/user/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      document.location.replace('/')
    }

    const error = await response.json();
    handleErrors(error);

  } catch (err) {
    console.log(err);
  }
};

const login = (event) => {
  event.preventDefault();

  const id = document.getElementById("login-id").value;
  const password = document.getElementById("login-password").value;

  try{
    const response = await fetch("/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id, password }),
    });

    if (response.ok) {
      document.location.replace('/')
    }

    const error = await response.json();
    handleErrors(error);

  } catch (err) {
    console.log(err);
  }
};

signupForm.addEventListener("submit", signup);
loginForm.addEventListener("submit");
