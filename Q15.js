var Guests = ["Anni", "Mami", "Nano"];
for (var i = 0; i < Guests.length; i++) {
    console.log("Greetings ".concat(Guests[i], ", you are invited to attend the dinner party"));
}
console.log("I AM REALLY SAD TO HEAR THAT ".concat(Guests[0], " CAN'T MAKE IT TO THE DINNER"));
Guests[0] = "Phopho";
for (var i = 0; i < Guests.length; i++) {
    console.log("Greetings ".concat(Guests[i], ", you are invited to attend the dinner party"));
}
