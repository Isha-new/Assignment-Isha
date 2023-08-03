var Guests = ["Anni", "Mami", "Nano"];
for(let i=0; i<Guests.length; i++){
     console.log(`Greetings ${Guests[i]}, you are invited to attend the dinner party`);
    }

 console.log(`I AM REALLY SAD TO HEAR THAT ${Guests[0]} CAN'T MAKE IT TO THE DINNER`); 

 Guests[0] = "Phopho"
 for(let i=0; i<Guests.length; i++){
     console.log(`Greetings ${Guests[i]}, you are invited to attend the dinner party`);
    }
    
   console.log("Hello everybody, We have found a bigger dinner table and we are expanding our Dinner invitations.");

   Guests.unshift("Dado");
   Guests.splice(2, 0, "Mamo");
   Guests.push("Dua");

   for(let i=0; i<Guests.length; i++){
    console.log(`Greetings ${Guests[i]}, the Dineer invitation has been updated`);
   }

   console.log("I am really sorry to inform you guys that our new diner table is not going to arrive on expected date.Unfortunately we can only invite two guests");

     console.log(Guests);
   console.log(`I am really sorry ${Guests[5]}, You are not invited anymore`);
   Guests.pop();

   console.log(`I am really sorry ${Guests[4]}, You are not invited anymore`);
   Guests.pop();

   console.log(`I am really sorry ${Guests[3]}, You are not invited anymore`);
   Guests.pop();

   console.log(`I am really sorry ${Guests[2]}, You are not invited anymore`);
   Guests.pop();

   for(let i=0; i<Guests.length; i++){
    console.log(`Greetings ${Guests[i]}, you are still invited to attend the dinner party`);
   }

   Guests = [];
   console.log(Guests);



