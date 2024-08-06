#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const isEven = (num) => num % 2 === 0;

const brainEvenGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = getUserName();
  console.log(`¡Hola, ${userName}!`);
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  const maxRounds = 3;
  for (let round = 0; round < maxRounds; round += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Pregunta: ${randomNumber}`);
    const answer = readlineSync.question('Tu respuesta: ').toLowerCase();

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }

    console.log('¡Correcto!');
  }

  console.log(`¡Felicidades, ${userName}!`);
};

brainEvenGame();
