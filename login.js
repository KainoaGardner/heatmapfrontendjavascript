const loginForm = document.getElementById("loginForm");
const loginSubmit = document.getElementById("loginSubmit");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");
const userStorage = "";

checkLoggedIn();

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  getLogin();
});

function checkLoggedIn() {
  const user = localStorage.getItem("user");
  if (user) {
    window.location.href = "index.html";
  } else {
    console.log("Not logged in");
  }
}

async function getToken(loginUsername, loginPassword) {
  try {
    const response = await fetch(API_URL + "auth/token/", {
      method: "POST",
      body: new URLSearchParams({
        username: loginUsername,
        password: loginPassword,
      }),
    });
    const data = await response.json();
    logInUser(loginUsername, data.access_token);
  } catch (error) {
    console.error("Error:", error);
  }
}

function logInUser(loginUsername, accessToken) {
  user = { username: loginUsername, token: accessToken };
  localStorage.setItem("user", user);
  window.location.href = "index.html";
}

function getLogin() {
  const username = loginUsername.value;
  const password = loginPassword.value;
  getToken(username, password);
  loginUsername.value = null;
  loginPassword.value = null;
}
