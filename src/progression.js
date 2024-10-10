import { getRandomNumber, getUserAnswer, checkAnswer } from './utils.js';
import greetUser from './cli.js';

// Función progresión aritmética
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const brainProgressionGame = () => {
  const userName = greetUser();
  console.log('¿Qué número falta en la progresión?');

  const maxRounds = 3;
  const progressionLength = 10;

  for (let round = 0; round < maxRounds; round += 1) {
    const start = getRandomNumber(10) + 1;  
    const step = getRandomNumber(5) + 1; 
    const progression = generateProgression(start, step, progressionLength);
    
    const hiddenIndex = getRandomNumber(progressionLength);  
    const correctAnswer = progression[hiddenIndex].toString();  
    progression[hiddenIndex] = '..';  

    // Mostrar la progresión en el formato esperado
    const question = `Pregunta: ${progression.join(' ')}`;
    
    // Obtener la respuesta del usuario
    const userAnswer = getUserAnswer(question, '', true).toString();  

    // Comprobar si la respuesta es correcta
    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default brainProgressionGame;
