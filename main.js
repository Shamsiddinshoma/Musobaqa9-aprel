const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

 
  const username = loginForm.querySelector("#username").value;
  const password = loginForm.querySelector("#password").value;

  if (
    username === localStorage.getItem("username") &&
    password === localStorage.getItem("password")
  ) {
    window.location.href = "";
  } else {
    alert("Invalid username or password");
  }
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newUsername = signupForm.querySelector("#new-username").value;
  const newPassword = signupForm.querySelector("#new-password").value;

  loginForm.style.display ="block"
  signupForm.style.display = "none"


  localStorage.setItem("username", newUsername);
  localStorage.setItem("password", newPassword);


  signupForm.querySelector("#new-username").value = "";
  signupForm.querySelector("#new-password").value = "";

  alert("Signup successful! Please login to continue.");
});