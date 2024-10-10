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
  const progressionLength = 10; // Definir longitud fija de la progresión

  for (let round = 0; round < maxRounds; round += 1) {
    const start = getRandomNumber(10) + 1; 
    const step = getRandomNumber(5) + 1;   
    const progression = generateProgression(start, step, progressionLength);

    const hiddenIndex = getRandomNumber(progressionLength); 
    const correctAnswer = progression[hiddenIndex].toString();  
    progression[hiddenIndex] = '..'; 

    // Formato de salida que espera la prueba
    const question = `Pregunta: ${progression.join(' ')}`;
    
    // Obtenemos la respuesta del usuario
    const userAnswer = getUserAnswer(question, '', true); 

    // Comprobamos si la respuesta del usuario es correcta
    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default brainProgressionGame;
