#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Función para calcular el MCD utilizando el algoritmo de Euclides
const gcd = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
};

// Función principal del juego
const playGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);

  console.log('Encuentra el máximo común divisor de los números dados.');

  // Número de preguntas que deseas hacer
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    console.log(`Pregunta: ${num1} ${num2}`);
    const answer = readlineSync.question('Tu respuesta: ');
    const correctAnswer = gcd(num1, num2);

    if (parseInt(answer, 10) === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

playGame();
