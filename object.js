class Dog {
  speak() {
    console.log("woof 🐶");
  }
}

class Cat {
  speak() {
    console.log("Meow 🐱");
  }
}

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



function createAnimal(animalType){

    const classes ={

        dog: Dog,
        cat : Cat,
    }
const animalClasses= classes[animalType.toLowerCase()]
    if(!animalClasses){
        throw new Error ("unknown Animal Type");
    }else{
        return new animalClasses();
    }
}
const animal1 = new createAnimal('cAt')

animal1.speak();