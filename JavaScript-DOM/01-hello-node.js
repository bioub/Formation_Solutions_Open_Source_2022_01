const prenoms = ['Jean', 'Eric', 'Romain'];

function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

// const hello = function(name) {
//   return  `Hello ${name}`;
// };

// const hello = (name) => `Hello ${name}`;

// for (let i = 0; i < prenoms.length; i++) {
//   const p = prenoms[i];
//   console.log(hello(p));
// }

for (const p of prenoms) {
  console.log(hello(p));
}
