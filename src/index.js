import readlineSync from 'readline-sync';

export const getUserName = () => {
  const name = readlineSync.question('¿Cual es tu nombre? ');
  return name;
};

export const askQuestion = (question, correctAnswer) => {
  console.log(`Pregunta: ${question}`);
  const userAnswer = readlineSync.question('Tu respuesta: ');
  return parseInt(userAnswer, 10) === correctAnswer;
};
