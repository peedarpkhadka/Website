document.addEventListener("DOMContentLoaded", () => {
    const showRegisterButton = document.getElementById("showRegister");
    const backToLoginLink = document.getElementById("back-to-login");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const showForgotPassword = document.getElementById("showForgotPassword");
    const forgotPasswordForm = document.getElementById("forgot-password-form");

    // Show register form and hide login form
    if (showRegisterButton) {
        showRegisterButton.addEventListener("click", (e) => {
            e.preventDefault();
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            showRegisterButton.style.display = "none";
        });
    }

    // Show login form and hide register form
    if (backToLoginLink) {
        backToLoginLink.addEventListener("click", (e) => {
            e.preventDefault();
            registerForm.style.display = "none";
            loginForm.style.display = "block";
            showRegisterButton.style.display = "inline-block";
        });
    }

    // Show forgot password form and hide login form
    if (showForgotPassword) {
        showForgotPassword.addEventListener("click", (e) => {
            e.preventDefault();
            loginForm.style.display = "none";
            forgotPasswordForm.style.display = "block";
        });
    }

    // Show login form and hide forgot password form
    if (forgotPasswordForm) {
        document.getElementById("back-to-login").addEventListener("click", (e) => {
            e.preventDefault();
            forgotPasswordForm.style.display = "none";
            loginForm.style.display = "block";
        });
    }
});