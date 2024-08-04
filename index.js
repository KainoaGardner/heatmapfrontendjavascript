TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb3dpZSIsImlkIjo3LCJleHAiOjE3MjMzNTAzODl9.Qt7-Z5bhW51-7OXoKq9aHDl3-gqi3TKwxjB-PlQkyK4";
const usersDiv = document.getElementById("usersDiv");

let users = [];

async function getAllUsers() {
  try {
    const response = await fetch(API_URL + "users/all/");
    const data = await response.json();
    for (const user of data) {
      users.push(user);
    }
    renderUsers();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function test() {
  try {
    const response = await fetch(API_URL + "heatmaps/all/", {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function logout() {
  const user = localStorage.getItem("user");
  console.log(user);
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

function renderUsers() {
  usersDiv.innerHTML = null;
  for (const user of users) {
    const userDiv = document.createElement("div");
    const username = document.createElement("p");
    username.textContent = user.username;
    userDiv.appendChild(username);
    usersDiv.appendChild(userDiv);
  }
}

getAllUsers();
test();
