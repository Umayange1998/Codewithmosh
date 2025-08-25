// class Dog {
//   speak() {
//     console.log("woof 🐶");
//   }
// }

// class Cat {
//   speak() {
//     console.log("Meow 🐱");
//   }
// }

// function createAnimal(animalType) {
//   switch (animalType.toLowerCase()) {
//     case "dog":
//       return new Dog();
//     case "cat":
//       return new Cat();
//     default:
//       throw new Error("unknown Animal Type");
//   }
// }



// function createAnimal(animalType){

//     const classes ={

//         dog: Dog,
//         cat : Cat,
//     }
// const animalClasses= classes[animalType.toLowerCase()]
//     if(!animalClasses){
//         throw new Error ("unknown Animal Type");
//     }else{
//         return new animalClasses();
//     }
// }
// const animal1 = new createAnimal('cAt')

// animal1.speak();

//////////////////////////////////////Exersixse 1 - Adress Object


// const adress ={
//     street: "street",
//     city : "City",
//     zipcode : "20222"
// }

// function showAdress(adress){
// for( let key in adress){
//     console.log(key,adress[key])
// }
// }

// showAdress(adress);

//////////////////////////////////////Exersixse 2 - Adress Object - factory and construction function


// function showAdress(street,city,zipcode){
//     return{
//         street,
//         city,
//         zipcode,
//     }
     
// }


// function showAdress1(street,city,zipcode){
//     this.street=street;
//     this.city = city;
//     this.zipcode= zipcode;
// }

// const adress =  showAdress('street','city','zipcode');

// const adress1 = new showAdress1('street','city','zipcode');

// console.log(adress);
// console.log(adress1);


//////////////////////////////////////Exersixse 3 - Adress Object Equality

// function address(street,city,zipcode){
//     this.street=street;
//     this.city = city;
//     this.zipcode= zipcode;
// }

// const address1 = new address('street','city','zipcode');
// const address2 = new address('street','city','zipcode');
// const address3 = address1;

// function areEqual(address1, address2){
//    return address1.street===address2.street&&
//     address1.city===address2.city&&
//     address1.zipcode===address2.zipcode;
// }

// function areSame(address1, address2){
//    return address1===address2
    
// }


// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));
// console.log(areEqual(address1,address3));
// console.log(areSame(address1,address3));


//////////////////////////////////////Exersixse 4 - Blog post Object 

// const post = {
//     title:'Title',
//     body:'Body',
//     author:'Author',
//     views:10,
//     comments:[
//         {author1:'author1',body1:'body1'},
//         {author2:'author2',body2:'body2'}
//     ],
//     isLive:true,
// }
// console.log(post)


//////////////////////////////////////Exersixse 5 - Blog post constructor function


// function createPost(title,body,author){
//     this.title = title;
//     this.author = author;
//     this.body = body;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;

// }


// const post =new createPost('Title','Body','Author');

// console.log(post)


