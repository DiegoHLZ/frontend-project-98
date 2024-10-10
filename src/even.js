import { getRandomNumber, getUserAnswer, checkAnswer } from './utils.js';
import greetUser from './cli.js';

const isEven = (num) => num % 2 === 0;

const brainEvenGame = () => {
  const userName = greetUser();
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  const maxRounds = 3;
  for (let round = 0; round < maxRounds; round += 1) {
    const randomNumber = getRandomNumber(100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    console.log(`Pregunta: ${randomNumber}`);

    const userAnswer = getUserAnswer('¿Es par este número?', randomNumber, false);

    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default brainEvenGame;
