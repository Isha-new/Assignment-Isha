let animals = ["Great Shark", "Crocodile", "Cheetah", "Falcon"];
for(let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

let animals2 = ["Great Shark", "Crocodile", "Cheetah", "Falcon"];
for(let i = 0; i < animals.length; i++) {
    if (i == 0){
        console.log("The great white shark is the world's largest known predatory fish.");
    }else if (i == 1){
        console.log("Crocodiles are among the largest reptiles.");
    }else if (i == 2){
        console.log("Cheetahs are blisteringly fast.");
    }else if (i == 3){
        console.log("Falcons are swift and powerful fliers.");
    }
}

console.log("The common characteristic among these animal is that none of them would make a great pet.")

