// Генерация случайного целого числа из заданного диапазона.

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

getRandomInteger(1, 25);
//console.log(getRandomInteger(0, 25));
//console.log(getRandomInteger(0, 1));
//console.log(getRandomInteger(0, 1));
//console.log(getRandomInteger(1, 25));
//console.log(getRandomInteger(24, 25));

// Создание уникальных ключей.

const createUniqueId = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const description = [
  'Мое фото',
  'Фото прошлого года',
  'Не помню когда это было',
  'Просто мне это нравится',
  'Где-то когда-то',
  'Давным давно',
  'Думаю уже всем все равно',
  'И снова мое фото'
];

const commentsName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const commentsMessage = [
  'Всё отлично!',
  'Замечательное фото',
  'В целом всё неплохо.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
  'Всё супер!',
  'Превосходно',
  'В целом всё хорошо.',
  'Когда вы делаете фотографию, не наклоняйтесь.',
  'Это просто некрасиво.',
  'С фотоаппаратом в руках, не надо круться.',
  'У меня  бы получилась фотография лучше.',
  'Лица у людей на фотке расплываются.',
  'Просто прекрасно!',
  'Удачный кадр.',
  'Побольше теплых тонов.',
  'Потренеруйтесь еще.',
  'Отличные воспоминания.',
  'Продолжай в том же духе!',
  'Фото в движении всегда лучше.',
  'Задний фон можно выбрать и по лучше.',
  'Смотреть больно.',
  'Просто ужас какой-то.',
  'Уникально!',
  'Думаю, это чудесно!',
  'Тоже так хочу.'
];

const photoDescription = () => {
  const generatePhotoId = createUniqueId(1, 25);
  const generatePhotoIdAndUrl = generatePhotoId();
  const generateCommentsId = getRandomInteger(0, commentsName.length - 1);
  const generateidComments = createUniqueId(1, 30);
  return {
    id: generatePhotoIdAndUrl,
    url: `photos/${generatePhotoIdAndUrl}.jpg`,
    description: description[getRandomInteger(0, description.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: {
      idComments: generateidComments(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: commentsMessage[generateCommentsId],
      name: commentsName[getRandomInteger(0, commentsName.length - 1)],
    }
  };
};

photoDescription();
//console.log(photoDescription());
