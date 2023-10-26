
// Функция преобразует время в число
const lookingNumbers = (string) => {
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
  const beginingWorkDayNumber = lookingNumbers(beginingWorkDay);
  const endWorkDayNumber = lookingNumbers(endWorkDay);
  const startMeetingNumber = lookingNumbers(startMeeting);
  const durationMeetingNumber = durationMeeting * 100 / 60;

  return (startMeetingNumber >= beginingWorkDayNumber && (startMeetingNumber + durationMeetingNumber) <= endWorkDayNumber);
};

//console.log(extendsMeeting('08:00', '17:30', '14:00', 90)); // true
//console.log(extendsMeeting('8:0', '10:0', '8:0', 120));// true
//console.log(extendsMeeting('08:00', '14:30', '14:00', 90)); // false
//console.log(extendsMeeting('14:00', '17:30', '08:0', 90));// false
//console.log(extendsMeeting('8:00', '17:30', '08:00', 900)); // false

extendsMeeting('08:00', '17:30', '14:00', 90);
