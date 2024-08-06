function validateForm() {
    let valid = true;

    // Clear previous error messages
    document.getElementById("username-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";

    // Get form values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate username
    if (username === "") {
        document.getElementById("username-error").innerHTML = "Username is required.";
        valid = false;
    }

    // Validate password
    if (password === "") {
        document.getElementById("password-error").innerHTML = "Password is required.";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("password-error").innerHTML = "Password must be at least 6 characters.";
        valid = false;
    }

    if (valid) {
        // If validation is successful, redirect to the next page
        window.location.href = "nextpage.html"; // Change this to your desired page URL
    }

    return valid; // Return false to prevent default form submission if not valid
}
    
document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    });
