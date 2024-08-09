function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function validateName() {
  var letters = /^[A-Za-z\s]+$/;
  var uname = document.getElementById("uname");
  var lblError = document.getElementById("lblErrorName");
  if (uname.value.match(letters)) {
    lblError.innerHTML = "";
    lblError.style.display = "none";
    return true;
  }
  lblError.innerHTML = "Name field requires only alphabet characters";
  lblError.style.display = "block";
  return false;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var lblError = document.getElementById("lblErrorEmail");
  lblError.innerHTML = "";
  lblError.style.display = "none";
  var expr =
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (email == "") {
    lblError.innerHTML = "Email is required";
    lblError.style.display = "block";
    return false;
  }
  if (!expr.test(email)) {
    lblError.innerHTML = "Invalid email address.";
    lblError.style.display = "block";
    return false;
  }
  lblError.innerHTML = "";
  lblError.style.display = "none";
  return true;
}

function validatePhone() {
  var phone = document.getElementById("phone").value;
  var lblError = document.getElementById("lblErrorPhone");
  lblError.innerHTML = "";
  lblError.style.display = "none";
  const phonePattern = /^[6-9]\d{9}$/;
  if (phone == "") {
    lblError.innerHTML = "Mobile number is required";
    lblError.style.display = "block";
    return false;
  }
  if (!phonePattern.test(phone)) {
    lblError.innerHTML = "Enter a valid mobile number (10 digits)";
    lblError.style.display = "block";
    return false;
  }
  if (phone.length > 10) {
    lblError.innerHTML = "Only 10 digits are possible";
    lblError.style.display = "block";
    return false;
  }
  lblError.innerHTML = "";
  lblError.style.display = "none";
  return true;
}

function validatePassword() {
  var pwd = document.getElementById("pwd").value;
  var lblError = document.getElementById("lblErrorPass");
  lblError.innerHTML = "";
  lblError.style.display = "none";
  var pattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (pwd == "") {
    lblError.innerHTML = "Please enter Password";
    lblError.style.display = "block";
    return false;
  }
  if (!pattern.test(pwd)) {
    lblError.innerHTML =
      "Field should contain one special character and one number";
    lblError.style.display = "block";
    return false;
  }
  if (pwd.length < 6) {
    lblError.innerHTML = "Password minimum length is 6";
    lblError.style.display = "block";
    return false;
  }
  if (pwd.length > 12) {
    lblError.innerHTML = "Password maximum length is 12";
    lblError.style.display = "block";
    return false;
  }
  lblError.innerHTML = "";
  lblError.style.display = "none";
  return true;
}

function validateRepeatPassword() {
  var pwd = document.getElementById("pwd").value;
  var rpwd = document.getElementById("repeat-pwd").value;
  var lblError = document.getElementById("lblErrorRepeatPass");
  if (rpwd == "") {
    lblError.innerHTML = "Enter confirm password";
    lblError.style.display = "block";
    return false;
  }
  if (pwd != rpwd) {
    lblError.innerHTML = "Password does not match";
    lblError.style.display = "block";
    return false;
  }
  lblError.innerHTML = "";
  lblError.style.display = "none";
  return true;
}

function validateForm() {
  var nameValid = validateName();
  var emailValid = validateEmail();
  var phoneValid = validatePhone();
  var passwordValid = validatePassword();
  var repeatPasswordValid = validateRepeatPassword();

  return (
    nameValid &&
    emailValid &&
    phoneValid &&
    passwordValid &&
    repeatPasswordValid
  );
}
function validateMessage() {
  const message = document.getElementById("message").value.trim();
  const messageError = document.getElementById("message-error");

  if (message === "") {
    messageError.textContent = "Message is required.";
    messageError.style.display = "block";
    return false;
  } else {
    messageError.textContent = "";
    messageError.style.display = "none";
    return true;
  }
}

function validateEnquiryForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
    alert("We will reach you soon...");
    return true;
  }

  return false;
}


document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    const name = document.getElementById("uname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("pwd").value;

    // Simulate storing user data
    const user = { name, email, phone, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
    window.location.href = "login.html"; // Redirect to login page after successful registration
  });

function toggleMenu() {
  var navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}
function addToCart(productName) {
  document.getElementById("modalText").textContent =
    productName + " has been added to your cart.";
  document.getElementById("cartModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("cartModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("cartModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const categoryLink = document.querySelector(".dropdown > a");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.style.display = "none";

  categoryLink.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (
      !categoryLink.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});
function toggleMenu() {
  var navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}
function addToCart(productName) {
  document.getElementById("modalText").textContent =
    productName + " has been added to your cart.";
  document.getElementById("cartModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("cartModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("cartModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function logout() {
  window.location.href = "index.html";
}
