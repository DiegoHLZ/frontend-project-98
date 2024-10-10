import { getRandomNumber, getUserAnswer, checkAnswer } from './utils.js';
import greetUser from './cli.js';

const brainCalcGame = () => {
  console.log('¿Cuál es el resultado de la expresión?');
  
  const userName = greetUser();
  console.log('Resuelve las operaciones matemáticas.');

  const maxRounds = 3;
  const operations = ['+', '-', '*'];

  for (let round = 0; round < maxRounds; round += 1) {
    const firstRandomNumber = getRandomNumber(10);
    const secondRandomNumber = getRandomNumber(10);
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    
    // Calculamos la respuesta correcta basada en la operación
    let correctAnswer;
    switch (randomOperation) {
      case '+':
        correctAnswer = firstRandomNumber + secondRandomNumber;
        break;
      case '-':
        correctAnswer = firstRandomNumber - secondRandomNumber;
        break;
      case '*':
        correctAnswer = firstRandomNumber * secondRandomNumber;
        break;
      default:
        correctAnswer = null;
    }

    // Mostrar la pregunta
    console.log(`Pregunta: ${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`);
    
    // Obtener la respuesta del usuario
    const userAnswer = getUserAnswer('¿Cuánto es?', `${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`, true);

    // Verificar si la respuesta es correcta
    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default brainCalcGame;
