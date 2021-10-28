import {Animal, Cat} from "./class.mjs";

// Animal
let cat = new Animal("Cat", 4)

cat.legs = 3
cat.makeNoise("Meow")
//
// console.log(cat.metaData)
// console.log(cat)
// console.log(cat.legs)

// Cat class
let Nan = new Cat("Cat", 4)
cat.makeNoise()
console.log(cat.metaData)