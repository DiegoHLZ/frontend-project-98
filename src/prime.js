import { getRandomNumber, getUserAnswer, checkAnswer } from './utils.js';
import greetUser from './cli.js';

// Función para verificar si un número es primo
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

// Función principal del juego
const brainPrimeGame = () => {
  const userName = greetUser();
  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

  const maxRounds = 3;
  for (let round = 0; round < maxRounds; round += 1) {
    const randomNumber = getRandomNumber(100) + 1;
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    const userAnswer = getUserAnswer(`¿Es ${randomNumber} un número primo?`, '', false);

    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default brainPrimeGame;
