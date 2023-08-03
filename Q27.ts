//Version -1
let alien_color: string = "Green";
if (alien_color == "Green") {
    console.log("The player has earned 5 points.");
  } else if (alien_color == "yellow") {
    console.log("The player just earned 10 points.");
  } else if (alien_color == "red") {
    console.log("The player has earned 15 points.");
  }

//Version-2
alien_color = "yellow";
if (alien_color == "Green") {
  console.log("The player has earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("The player just earned 10 points.");
} else if (alien_color == "red") {
  console.log("The player has earned 15 points.");
}

//Version-3
alien_color = 'red';
if (alien_color == "Green") {
    console.log("The player has earned 5 points.");
  } else if (alien_color == "yellow") {
    console.log("The player just earned 10 points.");
  } else if (alien_color == "red") {
    console.log("The player has earned 15 points.");
  }