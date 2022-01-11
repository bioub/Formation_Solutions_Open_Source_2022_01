import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(', '))
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    const entierSaisi = Number(answer);

    if (Number.isNaN(entierSaisi)) {
      console.log('Il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }


  });
}

const entierAlea = getRandomInt(0, 100);
const essais = [];
jouer();

// pile d'appels
// ^
// |
// |                     question           question
// |question             jouer              jouer
// |jouer                =>                 =>
// +-------------------------------------------------> temps
//
