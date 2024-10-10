import { getRandomNumber, getUserAnswer, checkAnswer } from './utils.js';
import greetUser from './cli.js';

// Función para calcular el MCD
const gcd = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
};

const brainGcdGame = () => {
  const userName = greetUser();
  console.log('Encuentra el máximo común divisor de los números dados.');

  const maxRounds = 3;
  for (let round = 0; round < maxRounds; round += 1) {
    const num1 = getRandomNumber(100) + 1;
    const num2 = getRandomNumber(100) + 1;

    console.log(`Pregunta: ${num1} ${num2}`);

    const userAnswer = getUserAnswer('', '', true);

    if (!checkAnswer(userAnswer, gcd(num1, num2), userName)) {
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default brainGcdGame;
