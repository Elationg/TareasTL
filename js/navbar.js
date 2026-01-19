// 1. Obtener estado de sesión
const isLoggedIn = localStorage.getItem("isLoggedIn");
const userName = localStorage.getItem("userName");

// 2. Elementos del navbar
const navLogin = document.getElementById("nav-login");
const navRegister = document.getElementById("nav-register");
const navUser = document.getElementById("nav-user");
const userGreeting = document.getElementById("user-greeting");
const logoutBtn = document.getElementById("btn-logout");

// 3. Links de dinero
const linkTransactions = document.getElementById("link-transactions");
const linkSendMoney = document.getElementById("link-sendmoney");
const linkDeposit = document.getElementById("link-deposit");

// 4. Si el usuario está logueado
if (isLoggedIn === "true" && userName) {
  // Ocultar login y registro
  navLogin.classList.add("d-none");
  navRegister.classList.add("d-none");

  // Mostrar bloque usuario
  navUser.classList.remove("d-none");

  // Mostrar saludo
  userGreeting.innerText = `Hola, ${userName}`;

  // Activar links reales
  linkTransactions.href = "/transactions.html";
  linkSendMoney.href = "/sendmoney.html";
  linkDeposit.href = "/deposit.html";
} else {

  // 5. Estado NO LOGUEADO
  navLogin.classList.remove("d-none");
  navRegister.classList.remove("d-none");

  navUser.classList.add("d-none");
  logoutBtn.classList.add("d-none");

  linkTransactions.href = "/login.html";
  linkSendMoney.href = "/login.html";
  linkDeposit.href = "/login.html";
}

// 6. Logout
logoutBtn?.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "/landing.html";
});

// // 5. Logout
// logoutBtn?.addEventListener("click", () => {
//   localStorage.removeItem("isLoggedIn");
//   localStorage.removeItem("userName");
//   window.location.href = "/landing.html";
// });
