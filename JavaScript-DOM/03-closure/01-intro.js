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
  interne();
}

externe();

// pile d'appels
// ^
// |
// |
// |interne
// |externe
// +-------------------> temps
