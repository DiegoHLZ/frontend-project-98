import readlineSync from 'readline-sync';

const getUserName = () => {
  const name = readlineSync.question('¿Cual es tu nombre? ');
  return name;
};

export default getUserName;
