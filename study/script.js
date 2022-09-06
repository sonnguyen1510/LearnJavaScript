// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//require("dotenv").config();
const USER = {
    UserName: "sonnguyen15",
    Password: "123456789",
};

const printForecast = function(array) {
    let forecastPrinted = `...`;
    for (let i = 0; i < array.length; i++) {
        forecastPrinted += ` ${array[i]}℃ in ${i + 1} days...`;
    }

    return forecastPrinted;
};

function Login() {
    const UserName = document.getElementById("UserName").value;
    const Password = document.getElementById("Password").value;

    if (prompt("Enter 'Yes' to confirm your login") === "Yes") {
        if (USER.UserName === UserName && USER.Password === Password) {
            alert(`Wellcome ${UserName} to join with us!`);
            document.getElementById("warning").innerHTML = "";
        } else {
            alert("Wrong username or password");
        }
    } else {
        alert(`Login again!`);
        document.getElementById("warning").innerHTML = "Please try again!";
    }
}

function goToGuessNumberGame() {
    window.location.href = "Guess-number/index.html";
}

document.querySelector(".modal-project").addEventListener("click", () => {
    window.location.href = "Modal/index.html";
});

console.log(printForecast([12, 5, -5, 0, 4]));

document.querySelector(".Pig-game-project").addEventListener("click", () => {
    window.location.href = "Pig-game/index.html";
});

console.log(printForecast([12, 5, -5, 0, 4]));