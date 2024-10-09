import { getRandomNumber, getUserAnswer, checkAnswer } from './utils.js';
import greetUser from './cli.js'; // obtenemos el nombre del usuario

const brainCalcGame = () => {
  const userName = greetUser();
  console.log('Resuelve las operaciones matemáticas.');

  const maxRounds = 3;
  for (let round = 0; round < maxRounds; round += 1) {
    const firstRandomNumber = getRandomNumber(10); //numeros aleatorios
    const secondRandomNumber = getRandomNumber(10);
    const correctAnswer = firstRandomNumber + secondRandomNumber;

    const userAnswer = getUserAnswer('¿Cuánto es?', `${firstRandomNumber} + ${secondRandomNumber}`, true);

    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default brainCalcGame;
