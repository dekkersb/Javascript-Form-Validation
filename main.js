const usernameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");

const warningUsername = document.getElementById("username-warning");
const warningPassword = document.getElementById("password-warning");

usernameInput.addEventListener("keyup", checkUsername);
passwordInput.addEventListener("keyup", checkPassword);

function checkUsername (e) {
    if (e.target.value.includes("@")) {
        warningUsername.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else {
        warningUsername.textContent = "";
    }
}

function checkPassword (e) {
    if (e.target.value === "" || e.target.value.length > 6 ) {
        warningPassword.textContent = ""
    } else {
        warningPassword.textContent = "Wachtwoord is te kort, moet minimaal 6 tekens bevatten.";
    }

}