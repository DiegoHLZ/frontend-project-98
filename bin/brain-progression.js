#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Función para generar una progresión aritmética
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

// Función principal del juego
const playGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);

  console.log('¿Qué número falta en la progresión?');

  // Puedes configurar el número de preguntas que deseas hacer
  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const length = Math.floor(Math.random() * 6) + 5; // Longitud entre 5 y 10
    const progression = generateProgression(start, step, length);
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Pregunta: ${progression.join(' ')}`);
    const answer = readlineSync.question('Tu respuesta: ');

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
