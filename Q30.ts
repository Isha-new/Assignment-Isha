var user_names: string[] = ["Admin", "Isha", "Muskaan", "Sabaa", "Maryam"];
for (let i = 0; i < user_names.length; i++){
  console.log(`Greeting ${user_names[i]}, How are you doing?`)
}

for(let i = 0; i < user_names.length; i++){
  if (user_names[i] == "Admin"){
    console.log("Hello Admin, would you like to see a status report?")
  }else {
    console.log(`Hello ${user_names[i]}, thank you for logging in again.`)
  }
}