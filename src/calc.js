import { getRandomNumber, getUserAnswer, checkAnswer } from './utils.js';
import greetUser from './cli.js';

const brainCalcGame = () => {
  const userName = greetUser(); 
  console.log('Resuelve las operaciones matemáticas.');

  const maxRounds = 3;
  for (let round = 0; round < maxRounds; round += 1) {
    const firstRandomNumber = getRandomNumber(10);
    const secondRandomNumber = getRandomNumber(10);
    
    // Generamos la operación de suma 
    const correctAnswer = firstRandomNumber + secondRandomNumber;

    console.log(`Pregunta: ${firstRandomNumber} + ${secondRandomNumber}`);
    
    // Obtenemos la respuesta del usuario
    const userAnswer = getUserAnswer('¿Cuánto es?', `${firstRandomNumber} + ${secondRandomNumber}`, true);
    
    // Comparamos la respuesta y mostramos el mensaje adecuado
    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default brainCalcGame;
