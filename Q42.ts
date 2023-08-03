var magicians: string[] = ["Toom", "Rasteel", "Cupper"];

function show_magician(magicians:string[]) {
    for (let magician of magicians){
    console.log(magician);
}

}

function make_great(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] += " The Great";
    }
}


show_magician(magicians);
make_great(magicians);
console.log(magicians);


