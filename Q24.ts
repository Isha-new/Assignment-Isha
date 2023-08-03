var string1 = "Pencil";
var string2 = "Pencil, Pen";
console.log(string1 == string2);
string1 = "Pencil, Pen"
console.log(string1 == string2);

var fruit1 = "apple, banana";
var fruit2 = "APPLE, BANANA";
console.log(fruit1 == fruit2);
fruit2 = fruit2.toLowerCase();
console.log(fruit1 == fruit2);

var cup1 = 1;
var cup2 = 1;
console.log(cup1 == cup2);

var cup1 = 1;
var cup2 = 5;
console.log(cup1 === cup2);

var compare1 = 50;
var compare2 = 100;
console.log(compare1 < compare2);

var compare1 = 50;
var compare2 = 100;
console.log(compare1 > compare2);

var age1 = 40;
var age2 = 40;
console.log(age1 >= age2);

var age1 = 40;
var age2 = 40;
console.log(age1 <= age2);


var age1 = 35;
var age2 = 40;
console.log(age1 >= age2);

var age1 = 35;
var age2 = 40;
console.log(age1 <= age2);

var Food = ["Beef", "Mutton", "Biryani"]
var food = Food.includes("Mutton");
console.log(Food.includes("Mutton"));

var food = Food.includes("Chicken");
console.log(Food.includes("Chicken"));

var firstName = "Isha";
var myAge = 21;
if(firstName[2] === "h" && myAge<25) {
    console.log("I am Young");
}else{
    console.log("I am old");
}


var firstName = "Isha";
var myAge = 21;
if(firstName[2] === "a" || myAge>25) {
    console.log("I am young");
}else{
    console.log("I am old");
}




