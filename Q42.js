var magicians = ["Toom", "Rasteel", "Cupper"];
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += " The Great";
    }
}
show_magician(magicians);
make_great(magicians);
console.log(magicians);
