import { getRandomNumber, getUserAnswer, checkAnswer } from './utils.js';
import greetUser from './cli.js';

// Función para generar una progresión aritmética
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

// Función principal del juego
const brainProgressionGame = () => {
  const userName = greetUser();
  console.log('¿Qué número falta en la progresión?');

  const maxRounds = 3;
  for (let round = 0; round < maxRounds; round += 1) {
    const start = getRandomNumber(10) + 1;
    const step = getRandomNumber(5) + 1;
    const length = getRandomNumber(6) + 5;
    const progression = generateProgression(start, step, length);
    const hiddenIndex = getRandomNumber(length);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    const userAnswer = getUserAnswer(`¿Cuál es el número faltante en la progresión? ${progression.join(' ')}`, '', true);

    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default brainProgressionGame;
