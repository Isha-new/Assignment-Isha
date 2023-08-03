var Guests = ["Anni", "Mami", "Nano"];
for (var i = 0; i < Guests.length; i++) {
    console.log("Greetings ".concat(Guests[i], ", you are invited to attend the dinner party"));
}
console.log("I AM REALLY SAD TO HEAR THAT ".concat(Guests[0], " CAN'T MAKE IT TO THE DINNER"));
Guests[0] = "Phopho";
for (var i = 0; i < Guests.length; i++) {
    console.log("Greetings ".concat(Guests[i], ", you are invited to attend the dinner party"));
}
console.log("Hello everybody, We have found a bigger dinner table and we are expanding our Dinner invitations.");
Guests.unshift("Dado");
Guests.splice(2, 0, "Mamo");
Guests.push("Dua");
for (var i = 0; i < Guests.length; i++) {
    console.log("Greetings ".concat(Guests[i], ", the Dineer invitation has been updated"));
}
