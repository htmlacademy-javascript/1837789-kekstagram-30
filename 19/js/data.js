import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './utils.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 30;

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

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from(
  { length : getRandomInteger(1, 2) },
  () => getRandomArrayElement(COMMENTS_MESSAGE),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(COMMENTS_NAME),
});

const generatePhotoId = createIdGenerator();

const createPicture = (index) => ({
  id: generatePhotoId(),
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment,
  ),
});

const getPictures = () => Array.from(
  { length: PICTURE_COUNT },
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

export {getPictures};
