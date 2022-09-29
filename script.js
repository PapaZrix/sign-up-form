let check = function() {
    const form = document.getElementById("signup");
    if (document.getElementById("password").value == document.getElementById("confirmed_password").value) {
        document.getElementById("message").innerHTML = "";
        document.getElementById("message").style.color = "green";
        document.getElementById("password").style.color = "green";
        document.getElementById("confirmed_password").style.color = "green";
        document.getElementById("password").classList.add("green")
        document.getElementById("confirmed_password").classList.add("green")
    } else {
        document.getElementById("message").innerHTML = "*Passwords do not match";
        document.getElementById("message").style.color = "red";
        document.getElementById("password").style.color = "black";
        document.getElementById("confirmed_password").style.color = "black";
        document.getElementById("password").classList.remove("green")
        document.getElementById("confirmed_password").classList.remove("green")
    }
}