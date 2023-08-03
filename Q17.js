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
console.log("I am really sorry to inform you guys that our new diner table is not going to arrive on expected date.Unfortunately we can only invite two guests");
console.log(Guests);
console.log("I am really sorry ".concat(Guests[5], ", You are not invited anymore"));
Guests.pop();
console.log("I am really sorry ".concat(Guests[4], ", You are not invited anymore"));
Guests.pop();
console.log("I am really sorry ".concat(Guests[3], ", You are not invited anymore"));
Guests.pop();
console.log("I am really sorry ".concat(Guests[2], ", You are not invited anymore"));
Guests.pop();
for (var i = 0; i < Guests.length; i++) {
    console.log("Greetings ".concat(Guests[i], ", you are still invited to attend the dinner party"));
}
Guests.pop();
Guests.pop();
console.log(Guests);
Guests = [];
console.log(Guests);
