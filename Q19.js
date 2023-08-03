var Guests = ["Anni", "Mami", "Nano"];
for (var i = 0; i < Guests.length; i++) {
    console.log("Greetings ".concat(Guests[i], ", you are invited to attend the dinner party"));
}
Guests.push("Mama");
var Invited = Guests.length;
console.log("We are inviting ".concat(Invited, " people to the Dinner Party"));
