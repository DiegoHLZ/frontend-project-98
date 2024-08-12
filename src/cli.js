import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cual es tu nombre? ');
  return name;
};

export default getUserName;
