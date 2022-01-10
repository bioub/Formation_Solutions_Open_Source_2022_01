setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// Dans quel ordre vont s'afficher les lettres ?
// 1 - A B C D E
// 2 - E B A D C Nicolas
// 3 - B E A D C Mathieu
// 4 - E B D A C Thierry / Nicolas
// 5 - B E D A C

// pile d'appels
// ^
// |
// |
// |
// |st - st - st - st - lg ..↩︎..     => ..↩︎..    => => ..↩︎..   =>
// +-----0---------------------------7ms-----------------------------> temps
//                      E            B           A  D          C


// file d'attente (0ms) : callbackB
// file d'attente (7ms) :
// file d'attente (500ms) : callbackA - callbackD
// file d'attente (501ms) : callbackD
// file d'attente (502ms) :


// Jake Archibald : In The Loop (2018) JSconf.Asia
// https://www.youtube.com/watch?v=cCOL7MC4Pl0

