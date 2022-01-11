globalThis.varGlobale = 'globale';

const varModule = 'module';

function externe(varClosure) {

  function interne() {
    const varLocale = 'locale';

    console.log(varLocale);
    console.log(varClosure);
    console.log(varModule);
    console.log(varGlobale);
  }

  return interne;
}

const hello = externe('Hello');
hello();

const bonjour = externe('Bonjour');
bonjour();

// pile d'appels
// ^
// |
// |
// |
// |externe - interne
// +-------------------> temps
