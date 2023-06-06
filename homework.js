
// Hamster class
// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

class Hamster{
    
   constructor(name){
        this.owner="";
        this.name=name;
        this.price=15;
        
    }
    wheelRun(){
console.log("Squeak Squeak");
    }
    eatFood(){
        console.log("Nibble Nibble");

    }
    getPrice(){
        return this.price;
    }
}
let hamster1=new Hamster("Richie");
hamster1.wheelRun();
hamster1.eatFood();
console.log(hamster1.getPrice());

//---------------------------------------------------------------------------------------------------------------------------------------------------

// Person
// attributes:

// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:

// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
// class Person extends Hamster{
    
//     constructor(name){
//         super(name);
//         this.age=0;
//         this.height=0;
//         this.weight=0;
//         this.mood=0;
//         this.hamsters=[];
//         this.bankAccount=0;
       
//     }
//     getName(){
//         return this.name;

//     }
//     getAge(){
//         return this.age;

//     }
//     getWeight(){
//         return this.weight;
//     }
//     greet(){
//         console.log(`Hi My name is ${this.name}.`);

//     }
//     eat(){
//         this.weight++;
//         this.mood++;
//     }
//     exercise(){
//         this.weight--;
//     }
//     ageUp(){
//         this.age++;
//         this.height++;
//         this.weight++;
//         this.mood--;
//         this.bankAccount += 10
//     }
//     buyHamster(hamster){
//         this.hamsters.push(hamster);
//         this.mood += 10;
//         this.bankAccount -= hamster.getPrice();

//     }
// }
// let richard = new Person("Richard");
// console.log(richard.getName());
// console.log(richard.getAge());
// console.log(richard.getWeight());
// richard.greet();
// richard.eat();
// console.log(richard.getWeight());
// richard.ageUp();
// console.log(richard.getAge());
// console.log(richard.getWeight());
// console.log(richard.bankAccount);
// const hamster = new Hamster("Mocha");
// richard.buyHamster(hamster);
// console.log(richard.hamsters);
// console.log(richard.mood);
// console.log(richard.bankAccount);

// Create a Story with your Person class
// Feel free to update or add methods to automate some of these tasks.

// Instantiate a new Person named Timmy
// Age Timmy five years
// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
// Age Timmy 9 years
// Create a hamster named "Gus"
// Set Gus's owner to the string "Timmy"
// Have Timmy "buy" Gus
// Age Timmy 15 years
// Have Timmy eat twice
// Have Timmy exercise twice

class Person extends Hamster{
 
    
    constructor(name){
        super(name);
        this.age=0;
        this.height=0;
        this.weight=0;
        this.mood=0;
        this.hamsters=[];
        this.bankAccount=0;
       
    }
    getName(){
        return this.name;

    }
    getAge(){
        return this.age;

    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log(`Hi My name is ${this.name}.`);

    }
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        this.weight--;
    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10
      
       }
    buyHamster(hamster){
      console.log(this.name+" bought "+hamster.name)
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();

    }
  eatMultipleTimes(times) {
    console.log(this.name+ " eats  "+times +" times")
    for (let i = 0; i < times; i++) {
      this.eat();
    }
  }

  exerciseMultipleTimes(times) {
     console.log(this.name+ " exercises  "+times +" times")
    for (let i = 0; i < times; i++) {
      this.exercise();
    }
  }
  
}

let richard = new Person("Richard");
console.log(richard.getName());
console.log("Richard's age is "+ richard.getAge() +" years");
//console.log(richard.getAge());
//console.log("Richard's age is "+ richard.getAge() +" years");
console.log("Richard's Weight is "+richard.getWeight()+" pounds");
richard.greet();
richard.eat();
console.log("Richard's Weight is "+richard.getWeight()+" pounds");
richard.ageUp();
console.log("Richard's age is "+ richard.getAge() +" years");
console.log("Richard's Weight is "+richard.getWeight()+" pounds");
console.log(richard.bankAccount);
const hamster = new Hamster("Mocha");
richard.buyHamster(hamster);
console.log(richard.hamsters);
console.log(richard.mood);
console.log(richard.bankAccount);
//story
let timmy =new Person ("Timmy");
for (let i = 0; i < 5; i++) {
        timmy.ageUp();
}
console.log("Timmy age is "+ timmy.getAge() +" years");
timmy.eatMultipleTimes(5);
timmy.exerciseMultipleTimes(5);
//Timmy 9 years
      for (let i = 0; i < 4; i++) {
      timmy.ageUp();
        }
console.log("Timmy age is "+ timmy.getAge() +" years");
// Create a hamster named "Gus"
const gus = new Hamster("Gus");
// Set Gus's owner to the string "Timmy"
gus.owner = "Timmy";
// Have Timmy "buy" Gus
timmy.buyHamster(gus);
      // Age Timmy 15 years
      for (let i = 0; i < 6; i++) {
      timmy.ageUp();
        }
console.log("Timmy age is "+ timmy.getAge() +" years");
// Have Timmy eat twice
timmy.eatMultipleTimes(2);

// Have Timmy exercise twice
timmy.exerciseMultipleTimes(2);

//-----------------------------------------------------------------------
// Chef Make Dinners
// class Dinner {

// }

// class Chef {

// }
// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners
class Chef {
    constructor(name) {
      this.name = name;
    }
  
    createDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
  }
  
  class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  const chefMeera = new Chef("Meera");

const dinner1 = chefMeera.createDinner(" Salad", "Grilled Veggies", "Chocolate Cake");
const dinner2 = chefMeera.createDinner("Chickpeas Salad", "Veg-Thali", "Cheese Cake");
const dinner3 = chefMeera.createDinner("Pav-bhaji", "Dal-Rice", "Ice-cream Cake");
  
    console.log(dinner1);
  console.log(dinner2);
  console.log(dinner3);
  
  





