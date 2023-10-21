const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 5;

const DESCRIPTION = [
  'Мое фото',
  'Фото прошлого года',
  'Не помню когда это было',
  'Просто мне это нравится',
  'Где-то когда-то',
  'Давным давно',
  'Думаю уже всем все равно',
  'И снова мое фото'
];

const COMMENTS_NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const COMMENTS_MESSAGE = [
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

// Генерация случайного целого числа из заданного диапазона.

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

getRandomInteger(1, 25);


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

// Функция создает массив объектов заданой длины и вида
const createArrayOfObjects = (array, length, functionCreate) => {
  for (let i = 0; i < length; i++) {
    array.push(functionCreate());
  }
};

const generatePhotoId = createUniqueId(1, PICTURE_COUNT);

// Создание объекта описания фото
const photoDescription = () => {
  const generatePhotoIdAndUrl = generatePhotoId();
  const quantityComments = getRandomInteger(1, COMMENT_COUNT);
  const generateidComments = createUniqueId(1, COMMENT_COUNT);

  const createArrComments = () => {
    const generateCommentsName = createUniqueId(0, COMMENTS_NAME.length - 1);
    const generateCommentsmessage = createUniqueId(1, COMMENTS_MESSAGE.length - 1);
    const quantityMessage = getRandomInteger(1, 2);
    let messageString = '';

    for (let i = 0; i < quantityMessage; i++) {
      messageString = `${messageString} ${COMMENTS_MESSAGE[generateCommentsmessage()]}`;
    }

    return {
      idComments: generateidComments(),
      avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
      message: messageString,
      name: COMMENTS_NAME[generateCommentsName()],
    };
  };
  const arrComments = [];
  createArrayOfObjects(arrComments, quantityComments, createArrComments);
  return {
    id: generatePhotoIdAndUrl,
    url: `photos/${generatePhotoIdAndUrl}.jpg`,
    description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
    likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
    comments: arrComments,
  };
};

const arrPhotoDescription = [];

createArrayOfObjects(arrPhotoDescription, PICTURE_COUNT, photoDescription);

console.log(arrPhotoDescription);
