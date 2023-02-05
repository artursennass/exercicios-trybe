const Car = require('./exercise1.ts')

const logan = new Car('Renaul Logan', 'Vinho', 4);

console.log(logan.speedUp());

console.log(logan.turn(''));


const gol = new Car('Gol', 'Prata', 4);

console.log(gol.speedUp());

console.log(gol.turn('esquerda'));

console.log(gol.speedUp());

console.log(gol.speedDown());

console.log(gol.turn('segunda saida a direita'));

console.log(gol.speedUp());

console.log(gol.speedDown());

console.log(gol.turn('direita'));

console.log(gol.turn('direita'));

console.log(gol.speedUp());

console.log(gol.speedDown());

console.log(gol.stop());