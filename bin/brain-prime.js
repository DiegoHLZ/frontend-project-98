#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Función para verificar si un número es primo
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Función principal del juego
const playGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);

  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

  // Puedes configurar el número de preguntas que deseas hacer
  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const num = Math.floor(Math.random() * 100) + 1;

    console.log(`Pregunta: ${num}`);
    const answer = readlineSync.question('Tu respuesta: ').toLowerCase();
    const correctAnswer = isPrime(num) ? 'yes' : 'no';

    if (answer === correctAnswer) {
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
