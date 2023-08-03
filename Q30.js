var user_names = ["Admin", "Isha", "Muskaan", "Sabaa", "Maryam"];
for (var i = 0; i < user_names.length; i++) {
    console.log("Greeting ".concat(user_names[i], ", How are you doing?"));
}
for (var i = 0; i < user_names.length; i++) {
    if (user_names[i] == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user_names[i], ", thank you for logging in again."));
    }
}
