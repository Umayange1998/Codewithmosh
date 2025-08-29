// const numbers=[3,4,5,];

// ///adding numbers
// //End

// numbers.push(6,7);

// //Begining
// numbers.unshift(1,2);

// //Middle
// numbers.splice(2,0,'a','b');

// numbers.push(1);

// console.log(numbers);

// console.log(numbers.indexOf(5));
// console.log(numbers.indexOf('1'));
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(2)!==-1);
// console.log(numbers.includes(1));

///////////////////////////////////////////////// joining arrays
// const numbers = [1,2,3,4,5]
// console.log(numbers)

// const joined = numbers.join(' ');

// console.log(joined);

//////////////////////////////////// Sorting arrays

// const numbers =[2,4,3,1];

// const sortNumbers = numbers.sort();

// console.log(sortNumbers);

// const reverseNumbers = numbers.reverse();

// console.log(reverseNumbers);

// const courses = [
//     {id:1, name: 'React'},
//   {id:2, name: 'javascript'},
//   {id:3, name: 'Node.js'},
//   {id:4, name: 'Angular'},
// ];

// courses.sort(function(a,b,){
//     //if a < b => -1
//     //if a > b => 1
//     //if a===b =>0

//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();

//     if(nameA < nameB) return -1;
//     if(nameA > nameB) return 1;
//     else return 0;

// });

// console.log(courses);

/////////////////////////////////////////////  testing the elements of an array

// const numbers = [1,3,2,4,-1];

// const allPositive = numbers.every(function(value){
//     return value>=0;
// })

// const atleastoOnePositive = numbers.some(function(value){
//     return value>=0;
// })
// console.log(allPositive);
// console.log(atleastoOnePositive);

////////////////////////////////////////////// filtering functions

// const numbers = [1,2,3,-1];

// const filtered = numbers.filter(function(value){
//     return value>=0;
// })
// console.log(filtered);

// ////////////////////////////////////////////// mapping functions

// const items = filtered.map(value =>'<li>'+value+'</li>')

// console.log(items);

// const html = '<ui>' + items.join('') + '</ui>';

// console.log(html)
// ////////////////////////////////////////////// redusing functions

// const sum = numbers.reduce((accumilator,CuurentValue)=>{
//     return a+b;
// });

// console.log(sum);

////////////////////////////////////////////// Exersice 1 - Array from range

// const numbers = arrayFromRange(1,4)
// console.log(numbers);

// function arrayFromRange(min,max){
//  const array=[];
//     for(i=min;i<=max;i++){

//          array.push(i)

//     }
//   return array;
// }

////////////////////////////////////////////// Exersice 2 - Includes

// const numbers = [1, 2, 3, 4, 5];

// console.log(checkIncludes(numbers,6));

// function checkIncludes(array,element){
//     for(let item of array){
//         if(item===element){
//             return true;
//         }
//     }
//             return false;

// }

// ////////////////////////////////////////////// Exersice 3 - Except


// console.log(except(numbers,[2,3]));

// function except(array,excluded){

//     const output=[]
//     // for(let item of array){
//     //     if(!checkIncludes(excluded,item))
//     //         output.push(item);
//     // }
//     // return output;


//     for(let item of array){
//         if(!excluded.includes(item))
//             output.push(item);

//     }
//     return output;
// }


////////////////////////////////////////////// Exersice 4 - Moving an element

// const numbers = [1,2,3,4,5];

// console.log(move(numbers,1,8));

// function move(array,index,offset){

//     const position =index+offset

//     if(array.length<=position||position<0){
//         console.error('Invalid Offset');
//         return;
//     }
//     const output=[...array];
//     const element= output.splice(index,1)[0];
//     output.splice(position,0,element);
//     return output;
// }


////////////////////////////////////////////// Exersice 4 - Count Occurrent
const numbers = [1,2,1,1,3,2,4,5];

console.log(countOccurrent(numbers,2));

function countOccurrent(array,element){
    let count = 0;

    for(item of array){
        if(item===element){
            count++;
        }
       
    }
     return count;
}