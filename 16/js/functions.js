
// Функция преобразует время в число
const timeToNumbers = (string) => {
  string = String(string);
  const stringLength = string.length;
  let stringNumbers = '';
  let testString = '';

  for(let i = 0; i < stringLength; i++){
    if (string[i] === ':') {
      for(let j = i + 1; j < stringLength; j++) {
        testString += string[j];
      }
      if(testString.length < 2) {
        stringNumbers = `${stringNumbers}0${testString}`;
      } else {
        stringNumbers += testString;
      }return parseInt(stringNumbers, 10);
    }
    if(!Number.isNaN(parseInt(string[i], 10))) {
      stringNumbers += string[i];
    }
  }
};

//Функция проверяет не выходит ли встреча за рамки рабочего дня.
const extendsMeeting = (beginingWorkDay, endWorkDay, startMeeting, durationMeeting) => {
  const beginingWorkDayNumber = timeToNumbers(beginingWorkDay);
  const endWorkDayNumber = timeToNumbers(endWorkDay);
  const startMeetingNumber = timeToNumbers(startMeeting);
  const durationMeetingNumber = durationMeeting * 100 / 60;

  return (startMeetingNumber >= beginingWorkDayNumber && (startMeetingNumber + durationMeetingNumber) <= endWorkDayNumber);
};

//console.log(extendsMeeting('08:00', '17:30', '14:00', 90)); // true
//console.log(extendsMeeting('8:0', '10:0', '8:0', 120));// true
//console.log(extendsMeeting('08:00', '14:30', '14:00', 90)); // false
//console.log(extendsMeeting('14:00', '17:30', '08:0', 90));// false
//console.log(extendsMeeting('8:00', '17:30', '08:00', 900)); // false

extendsMeeting('08:00', '17:30', '14:00', 90);

// Функция для формирования адресов файлов.

const changesString = (string, minLength, additionalСharacters) => {
  let additionalString = '';
  if (string.length >= minLength) {
    return string;
  } else {
    while(string.length < minLength && additionalСharacters.length < (minLength - string.length)) {
      string = additionalСharacters + string;
    }
    for (let i = 0; i < minLength - string.length; i++) {
      additionalString += additionalСharacters[i];
    }
    string = additionalString + string;
  }
  return string;
};

changesString('1', 2, '0');

//Добавочный символ используется один раз
//console.log(changesString('1', 2, '0')); // '01'

//Добавочный символ использован три раза
//console.log(changesString('1', 4, '0')); // '0001'

//Добавочные символы обрезаны с конца
//console.log(changesString('q', 4, 'werty')); // 'werq'

//Добавочные символы использованы полтора раза
//console.log(changesString('q', 4, 'we')); // 'wweq'

//Добавочные символы не использованы, исходная строка не изменена
//console.log(changesString('qwerty', 4, '0')); // 'qwerty'

//console.log(changesString('q', 5, 'we')); // 'weweq'

//console.log(changesString('q', 6, 'we')); // 'wweweq'

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
  for(let i = 0; i < stringLength / 2; i++){
    if(caseString.at(-(i + 1)) !== caseString.at(i)){
      return false;
    }
  }
  return true;
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
    if(!Number.isNaN(parseInt(string[i], 10))) {
      stringNambers += string[i];
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

export { lookingNumbers };
