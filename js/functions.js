//Функция для проверки длины строки.
const string = 'Кекс';
const maxLength = 10;

function checkslength(line, maxlineLength) {
  const lineLength = line.length;
  if(lineLength > maxlineLength) {
    return false;
  }else {
    return true;
  }
}
checkslength(string, maxLength);


//Функция для проверки, является ли строка палиндромом.
const polindromize = function(line){
  const caseLine = line.toLowerCase().replaceAll(' ', '');
  const lineLength = caseLine.length;
  let j = 0;
  for(let i = 0; i < lineLength; i++){
    if(caseLine.at(-(i++)) === caseLine.at(i)){
      j++;
    }
  }
  if(j === lineLength){
    return true;
  }else {
    return false;
  }
};
polindromize(string);

/*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.*/

const lookingNumbers = function(line) {
  line = String(line);
  const lineLength = line.length;
  let lineNambers = '';
  for(let i = 0; i < lineLength; i++){
    for(let j = 0; j < 10; j++){
      if(line.at(i) === String(j)){
        lineNambers = lineNambers + String(j);
      }
    }
  }
  return parseFloat(lineNambers, 10);
};

const string1 = 'xcg 00.5 456';
lookingNumbers(string1);
