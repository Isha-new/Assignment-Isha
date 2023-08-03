let myName = "iShA";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

function titlecase(title) {
var newName = title.toLowerCase();
return title.charAt(0).toUpperCase() + newName.slice(1);
}
console.log(titlecase(myName));



