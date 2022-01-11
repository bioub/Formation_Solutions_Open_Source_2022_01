// Object JS === Dictionnaire
// PHP <=> Tableaux associatifs
// Java <=> Map

console.log(Math.sum); // undefined;

// Etendre un objet (ajout de clés/valeurs)
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3;

delete Math.sum;
console.log(Math.sum); // undefined;

// Créer des objets

// Object Literal
// Soit pour des simples à créer (todos, coords)
// Soit pour des objets qui ne servent qu'une fois (options de createInterface, objet singleton)
const coords = {
  x: 1,
  y: 2,
};

coords.z = 3;

console.log(coords.x); // 1
console.log(coords.y); // 2
console.log(coords.z); // 3

// Constructor
// function Contact(name) {
//   this.name = name;
// }

// Contact.prototype.hello = function () {
//   return `Hello ${this.name}`;
// };

// const romain = new Contact('Romain');
// console.log(typeof romain); // object
// console.log(romain.hello());

class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hello ${this.name}`;
  }
}


const romain = new Contact('Romain');
console.log(typeof Contact); // function
console.log(typeof romain); // object
delete romain.name;
console.log(romain.hello()); // Hello undefined
