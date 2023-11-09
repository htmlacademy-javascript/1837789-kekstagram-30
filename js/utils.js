const REMOVE_MESSAGE_TIMEOUT = 5000;
const PAUSE_IMG_RENDERING = 500;

const isEscapeKey = (evt) => evt.key === 'Escape';

const errorMessageElement = document.querySelector('#data-error')
  .content.querySelector('.data-error');

const showErrorMessage = () => {
  const errorElement = errorMessageElement.cloneNode(true);
  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

const debounce = (callback, timeoutDelay = PAUSE_IMG_RENDERING) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { showErrorMessage, isEscapeKey, debounce };
