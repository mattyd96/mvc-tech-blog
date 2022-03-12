const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

const handleErrors = err => {};

const signup = async (event) => {
  event.preventDefault();

  const username = document.getElementById("signup-username");
  const email = document.getElementById("signup-email");
  const password = document.getElementById("signup-password");

  try {
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    response.ok ?
        document.location.replace('/') :
        handleErrors(response.json());
  } catch (err) {
      console.log('oh no');
  }
};

const login = (event) => {};

signupForm.addEventListener("submit");
loginForm.addEventListener("submit");
