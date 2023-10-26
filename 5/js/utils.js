// Генерация случайного целого числа из заданного диапазона.

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Выбор рандомного элемента из массива данных

const getRandomArrayElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

// Функция генерирует уникальный Id увеличивая предыдущий на 1.

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

export {getRandomInteger, getRandomArrayElement, createIdGenerator};
