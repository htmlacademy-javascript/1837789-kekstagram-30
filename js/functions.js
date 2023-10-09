//Функция для проверки длины строки.

const checksLength = (string, maxStringLength) => string.length <= maxStringLength;

checksLength('проверяемая строка', 20); // true
//console.log(checksLength('проверяемая строка', 20));
checksLength('проверяемая строка', 18); // true
//console.log(checksLength('проверяемая строка', 18));
checksLength('проверяемая строка', 10); // false
//console.log(checksLength('проверяемая строка', 10));

//Функция для проверки, является ли строка палиндромом.
//1. Решение без использования массива.

const polindromize = (string) => {
  const caseString = string.toLowerCase().replaceAll(' ', '');
  const stringLength = caseString.length;
  let j = 0;
  for(let i = 0; i < stringLength; i++){
    if(caseString.at(-(i + 1)) === caseString.at(i)){
      j++;
    }
  }
  return j === stringLength;
};
polindromize('топот'); // true
//console.log(polindromize('топот'));
polindromize('ДовОд'); // true
//console.log(polindromize('ДовОд'));
polindromize('Кекс'); // false
//console.log(polindromize('Кекс'));

// 2. Решение c использованием массива

const polindromize2 = (string) => {
  const caseString = string.toLowerCase().replaceAll(' ', '');
  const stringRevers = caseString.split('').reverse().join('');
  return stringRevers === caseString;
};

polindromize2('топот');
//console.log(polindromize2('топот')); // true
//console.log(polindromize2('ДовОд')); // true
//console.log(polindromize2('Кекс')); //false


/*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.*/

const lookingNumbers = (string) => {
  string = String(string);
  const stringLength = string.length;
  let stringNambers = '';
  for(let i = 0; i < stringLength; i++){
    for(let j = 0; j < 10; j++){
      if(string.at(i) === String(j)){
        stringNambers = stringNambers + String(j);
      }
    }
  }
  return parseInt(stringNambers, 10);
};

lookingNumbers('2023 год'); // 2023
//console.log(lookingNumbers('2023 год'));
lookingNumbers('ECMAScript 2022'); // 2022
//console.log(lookingNumbers('ECMAScript 2022'));
lookingNumbers('1 кефир, 0.5 батона'); // 105
//console.log(lookingNumbers('1 кефир, 0.5 батона'));
lookingNumbers('агент 007'); // 7
//console.log(lookingNumbers('агент 007'));
lookingNumbers('а я томат'); // NaN
//console.log(lookingNumbers('а я томат'));
lookingNumbers(2023); // 2023
//console.log(lookingNumbers(2023));
lookingNumbers(-1); // 1
//console.log(lookingNumbers(-1));
lookingNumbers(1.5); // 15
//console.log(lookingNumbers(1.5));
