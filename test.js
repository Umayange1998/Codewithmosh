let a = "red";
let b = "blue";

let c = a;

a = b;
b = c;

console.log(a);
console.log(b);

// Hour
// Hour is between 6am and 12pm: Good morning
// Hour is between 12pm and 4pm: Good Afternoon
// Othervise Good Evening

let Hour = 20;

// if (Hour >= 6 && Hour < 12) {
//   console.log("Good Morning");
// } else if (Hour >= 12 && Hour < 16) {
//   console.log("Good Afternoon");

// } else{
//     console.log("Good Evening")
// }

// let Role = "Guest";

// switch (Role.toLowerCase()) {
//   case "guest":
//     console.log("Guest user");
//     break;
//   case "moderator":
//     console.log("Moderator User");
//     break;
//   default:
//     console.log("Unknown User");
// }
