#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getUserName } from '../src/index.js';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const brainCalcGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = getUserName();
  console.log(`¡Hola, ${userName}!`);
  console.log('¿Cuál es el resultado de la expresión?');

  const maxRounds = 3;
  for (let round = 0; round < maxRounds; round += 1) {
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${a} ${operator} ${b}`;
    const correctAnswer = calculate(a, b, operator);

    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (parseInt(userAnswer, 10) !== correctAnswer) {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }

    console.log('¡Correcto!');
  }

  console.log(`¡Felicidades, ${userName}!`);
};

brainCalcGame();
