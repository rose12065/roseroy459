function validateName() {
    var letters = /^[A-Za-z\s]+$/;
    var uname = document.getElementById("uname");
    var lblError = document.getElementById("lblErrorName");    
    if (uname.value.match(letters)) {
        lblError.innerHTML = "";
        lblError.style.display = 'none';
        return true;
    }
    lblError.innerHTML = "Name field requires only alphabet characters";
    lblError.style.display = 'block';
    return false;
}

function validateEmail() {
    var email = document.getElementById("email").value; 
    var lblError = document.getElementById("lblErrorEmail");
    lblError.innerHTML = "";
    lblError.style.display = 'none';
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (email == "") {
        lblError.innerHTML = "Email is required";
        lblError.style.display = 'block';
        return false;
    }
    if (!expr.test(email)) {
        lblError.innerHTML = "Invalid email address.";
        lblError.style.display = 'block';
        return false;
    }
    lblError.innerHTML = "";
    lblError.style.display = 'none';
    return true;
}

function validatePhone() {
    var phone = document.getElementById("phone").value;
    var lblError = document.getElementById("lblErrorPhone");
    lblError.innerHTML = "";
    lblError.style.display = 'none';
    const phonePattern = /^[6-9]\d{9}$/;
    if (phone == "") {
        lblError.innerHTML = "Mobile number is required";
        lblError.style.display = 'block';
        return false;
    }
    if (!phonePattern.test(phone)) {
        lblError.innerHTML = "Enter a valid mobile number (10 digits)";
        lblError.style.display = 'block';
        return false;
    }
    if (phone.length > 10) {
        lblError.innerHTML = "Only 10 digits are possible";
        lblError.style.display = 'block';
        return false;
    }
    lblError.innerHTML = "";
    lblError.style.display = 'none';
    return true;
}

function validatePassword() {
    var pwd = document.getElementById("pwd").value;
    var lblError = document.getElementById("lblErrorPass");
    lblError.innerHTML = "";
    lblError.style.display = 'none';
    var pattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (pwd == "") {
        lblError.innerHTML = "Please enter Password";
        lblError.style.display = 'block';
        return false;
    }
    if (!pattern.test(pwd)) {
        lblError.innerHTML = "Field should contain one special character and one number";
        lblError.style.display = 'block';
        return false;
    }
    if (pwd.length < 6) {
        lblError.innerHTML = "Password minimum length is 6";
        lblError.style.display = 'block';
        return false;
    }
    if (pwd.length > 12) {
        lblError.innerHTML = "Password maximum length is 12";
        lblError.style.display = 'block';
        return false;
    }
    lblError.innerHTML = "";
    lblError.style.display = 'none';
    return true;
}

function validateRepeatPassword() {
    var pwd = document.getElementById("pwd").value;
    var rpwd = document.getElementById("repeat-pwd").value;
    var lblError = document.getElementById("lblErrorRepeatPass");
    if (rpwd == "") {
        lblError.innerHTML = "Enter confirm password";
        lblError.style.display = 'block';
        return false;
    }
    if (pwd != rpwd) {
        lblError.innerHTML = "Password does not match";
        lblError.style.display = 'block';
        return false;
    }
    lblError.innerHTML = "";
    lblError.style.display = 'none';
    return true;
}

function validateForm() {
    var nameValid = validateName();
    var emailValid = validateEmail();
    var phoneValid = validatePhone();
    var passwordValid = validatePassword();
    var repeatPasswordValid = validateRepeatPassword();

    return nameValid && emailValid && phoneValid && passwordValid && repeatPasswordValid;
}

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (!validateForm()) {
        return;
    }

    const name = document.getElementById('uname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('pwd').value;

    // Simulate storing user data
    const user = { name, email, phone, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful!');
    window.location.href = 'login.html'; // Redirect to login page after successful registration
});