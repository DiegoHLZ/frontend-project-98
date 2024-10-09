import readlineSync from 'readline-sync';

// Función para generar un número aleatorio
export function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Función para obtener la respuesta del usuario
export function getUserAnswer(questionMessage, questionValue, isNumberAnswer = false) {
  console.log(questionMessage);
  console.log(`Pregunta: ${questionValue}`);
  const userAnswer = readlineSync.question('Tu respuesta: ');
  return isNumberAnswer ? Number(userAnswer) : userAnswer;
}

// Función para verificar la respuesta
export function checkAnswer(userAnswer, correctAnswer, userName) {
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' es incorrecto. La respuesta correcta era '${correctAnswer}'.`);
    console.log(`¡Inténtalo de nuevo, ${userName}!`);
    return false;
  }
  console.log('¡Correcto!');
  return true;
}
