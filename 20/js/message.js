import { isEscapeKey } from './utils.js';

const successMessageElement = document.querySelector('#success')
  .content.querySelector('.success');
const errorMessageElement = document.querySelector('#error')
  .content.querySelector('.error');


const onBodyClick = (evt) => {
  if(evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
    return;
  }
  hideMessage();
};

function hideMessage () {
  const existsElement = document.querySelector('.success') || document.querySelector('.error');
  existsElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.removeEventListener('click', onBodyClick);
}

const onCloseButtunClick = () => {
  hideMessage();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
}

const showMessage = (element, buttonClass) => {
  document.body.append(element);
  document.body.addEventListener('click', onBodyClick);
  const button = element.querySelector(buttonClass);
  button.addEventListener('click', onCloseButtunClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const showSuccessMessage = () => {
  showMessage(successMessageElement, '.success__button');
};

const showErrorMessage = () => {
  showMessage(errorMessageElement, '.error__button');
};

export { showSuccessMessage, showErrorMessage };

