import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Enoncé slide 71

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log(answer);
    jouer();
  });
}

jouer();
