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
