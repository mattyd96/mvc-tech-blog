const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

const handleErrors = err => {};

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

    response.ok ?
        document.location.replace('/') :
        handleErrors(response.json());
  } catch (err) {
      console.log(err);
  }
};

const login = (event) => {};

signupForm.addEventListener("submit", signup);
//loginForm.addEventListener("submit");
