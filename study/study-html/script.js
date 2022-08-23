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

function downloadImages() {
    const urls = document.getElementById("link-image").value;

    urls.map((url) => {
        const splitUrl = url.split("/");
        const filename = splitUrl[splitUrl.length - 1];
        fetch(url)
            .then((response) => {
                response.arrayBuffer().then(function(buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", filename); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    });
}

console.log(printForecast([12, 5, -5, 0, 4]));