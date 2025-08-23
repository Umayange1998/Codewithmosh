//////////////////////////////////////Exersixse 1 - Max of two Numbers

// let max = maximum(4,9);
// console.log(max);

// function maximum(x,y){
//     if(x>y){
//         return x;
//     }else{
//         return y;
//     }
// // return(x>y) ?x:y;
// }

//////////////////////////////////////Exersixse 2 - landscape or portrait

// let issLOrP = isLandscape(3,5)
// function isLandscape(lenth, height){
//     if(lenth>height){
//         console.log("image is landscape")
//     }else{
//                 console.log("image is Portrait")

//     }
// }

////////////////////////////////////// Exersice 3 - FizzBuss
////Divisable by 3 => Fizz
////Divisable by 5 => Buzz
////Divisable by 3 & 5 => FizzBuss
////Not divisable by 3 0r 5 => input
//// Not a number => not a number

// let output = fizzBuzz(true);

// console.log(output);

// function fizzBuzz(input){
//     if(typeof input !== 'number'){
//             return("Input is not a number.");
//     }else if((input % 3 ===0 )&& (input % 5 ===0)){
//         return("FizzBuss");
//     }else if(input % 3 ===0 ){
//         return("Fizz");
//     }else if(input % 5 ===0){
//         return("Buzz");
//     }else{
//         return(input);
//     }
// }

////////////////////////////////////// Execersize 4 - Check speed
// //speed limit=70
// //for every 5 over 70 => 1point
// //12 point => license suspendent

// let Output = checkspeed(130);

// console.log(Output);

// function checkspeed(speed){

//     const speedLimit = 70;
//     const kmPerPoimt = 5;
//     if(speed<=speedLimit){
//         return("Ok")
//     }else{
//         let pont= Math.floor((speed-speedLimit)/kmPerPoimt)
//         if(pont<12){
//             return (pont);
//         }else{
//             return("Point - "+pont+" "+"license suspendent")
//         }
//     }
// }

//////////////////////////////////////Execersize 5- Even and Odd numbers

// showNumbers(10);

// function showNumbers(numberLimit){
// for(i=1; i<=numberLimit; i++){
//     if(i%2 ===0){
//         console.log(i + " "+ "Even")
//     }else{
//                 console.log(i + " "+ "ODD")

//     }
// }
// }

////////////////////////////////////// Exersice 6 - count Truthy

// const array = [0,1,2,3,4,'',null,NaN,10,"name",undefined];

// console.log(countTruthy(array));

//   function countTruthy(array){
//     let count = 0;

//     for (let value of array){
//         if(value){
//             count++;
//         }
//     }
//             return count;

//   }

////////////////////////////////////// Exersice 7 - String properties

// const movie = {
//   title: "Movie",
//   releseYear: 2025,
//   director: "Director",
//   rating: 4.7,
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let prpertie in obj) {
//     if (typeof obj[prpertie] === "string") console.log(prpertie, obj[prpertie]);
//   }
// }

////////////////////////////////////// Exersice 8 - Sum of multiples of 3 or 5

// console.log(sum(10));

// function sum(limit){
// let sum = 0;
//     for(i=1; i<=limit; i++){

//         if(i%3===0){
//             sum+=i
//         }else if(i%5===0){
//             sum=sum+i;

//         }

//     }
// return sum;

// }

////////////////////////////////////// Exersice 9 - Grade



// const marks=[80,80,50];

// //Average 
// // 1-59 : F
// // 60 - 69 : D
// // 70 - 79 : C
// // 80 - 89 : B
// // 90 - 100 : A


// console.log(grade(marks));


// function grade(marks){
//     let count = 0;
//     let sum = 0;
//      for (let mark of marks){
// sum+=mark;
//      }
//      let avg =sum/marks.length;

//      console.log ("Average is "+avg);

//     if(avg>=90){
//         return ("A")
//     }else  if(avg>=80){
//         return ("B")
//     }else  if(avg>=70){
//         return ("C")
//     }else  if(avg>=60){
//         return ("D")
//     }else{
//         return("F")
//     }
// }


////////////////////////////////////// Exersice 10 - Stars

// showStars(10);

// function showStars(row){

//     for(i=0; i<=row; i++){

//         let stars=''
//         for(x=0;x<=i;x++){
//             stars+='*'

//         }
//                         console.log(stars)

//     }
// }

////////////////////////////////////// Exersice Prime numbers


showPrimes(20);

function showPrimes(limit){

    for(let number=2; number<=limit; number++){

        let isPrime= true;

        for(let factor=2; factor<number; factor++){
            if(number % factor === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            console.log(number);
        }
    }
}