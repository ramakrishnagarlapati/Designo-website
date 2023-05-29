// navigation

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const overlayEl = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlayEl.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach((nav_link) => {
  nav_link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlayEl.classList.remove("active");
  });
});

// contact form

const form = document.querySelector("#form");
const formControl = document.querySelector(".form-control");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // get values from the inputs

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();

  if (usernameValue == "") {
    setErrorFor(username);
  } else {
    setSuccessFor(username);
  }
  if (emailValue == "" || !isEmail(emailValue)) {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }
  if (phoneValue == "") {
    setErrorFor(phone);
  } else {
    setSuccessFor(phone);
  }
  if (messageValue == "") {
    setErrorFor(message);
  } else {
    setSuccessFor(message);
  }
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

// check email format
function isEmail(email) {
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  return regex.test(email);
}

//cta btn onclick=>contact page

const ctaBtn = document.querySelector(".cta .btn-dark");

ctaBtn?.addEventListener("click", (e) => {
  location = "./contact.html";
});

//see location btn in about and contact page onclick=>loactions page

const locationsEl = document.querySelector(".locations");

locationsEl?.addEventListener("click", (e) => {
  if (e.target.classList.contains("location-btn")) {
    location = "./locations.html";
  }
});
