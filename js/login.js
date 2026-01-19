const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "admin@piggywallet.com" && password === "admin1234") {
    // Guardamos sesión
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", "Admin");

    // Redirigimos
    window.location.href = "landing.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
