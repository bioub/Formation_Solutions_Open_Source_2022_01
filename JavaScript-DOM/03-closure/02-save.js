globalThis.varGlobale = 'globale';

const varModule = 'module';

function externe() {
  const varClosure = 'closure';

  function interne() {
    const varLocale = 'locale';

    console.log(varLocale);
    console.log(varClosure);
    console.log(varModule);
    console.log(varGlobale);
  }

  return interne;
}

const interneFromExterne = externe();
interneFromExterne();

// pile d'appels
// ^
// |
// |
// |
// |externe - interne
// +-------------------> temps
