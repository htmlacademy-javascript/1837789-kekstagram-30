import { resetScale } from './scale.js';
import { init as initEffect, reset as resetEffect } from './effect.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SIMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const ERROR_TEXT = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштэгов`,
  NOT_UNIQUE: 'Хэштэги должны быть уникальными',
  INVALID_PATTERN: 'Неправельный хэштэг',
};

const formElement = document.querySelector('.img-upload__form');
const textHashtagsElement = formElement.querySelector('.text__hashtags');
const bodyElement = document.querySelector('body');
const uploadFileElement = formElement.querySelector('#upload-file');
const imgUploadOverlayElement = formElement.querySelector('.img-upload__overlay');
const cancelButton = formElement.querySelector('#upload-cancel');
const textDescriptionElement = formElement.querySelector('.text__description');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const openForm = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

const closeForm = () => {
  formElement.reset();
  resetScale();
  resetEffect();
  pristine.reset();

  imgUploadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

const onimgUploadFileChange = () => {
  openForm();
};

const onFormElementSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const normalizeTags = (tagString) => tagString.trim().split(' ').filter((tag) => Boolean(tag.length));

const validateHashtags = (value) => normalizeTags(value).every((tag) => VALID_SIMBOLS.test(tag));

const validateHashtagsCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;


const validateHashtagsRepeate = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  const uniqueHashtags = new Set(lowerCaseTags);
  return lowerCaseTags.length === uniqueHashtags.size;
};

pristine.addValidator(textHashtagsElement, validateHashtags, ERROR_TEXT.INVALID_PATTERN, 1, true);
pristine.addValidator(textHashtagsElement, validateHashtagsCount, ERROR_TEXT.INVALID_COUNT, 3, true);
pristine.addValidator(textHashtagsElement, validateHashtagsRepeate, ERROR_TEXT.NOT_UNIQUE, 2, true);

const isTextFiledFocused = () =>
  document.activeElement === textHashtagsElement ||
  document.activeElement === textDescriptionElement;


const isEscapeKey = (evt) => evt.key === 'Escape';

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFiledFocused()) {
    evt.preventDefault();
    closeForm();
  }
}

const startsForm = () => {
  uploadFileElement.addEventListener('change', onimgUploadFileChange);
  cancelButton.addEventListener('click', closeForm);
  formElement.addEventListener('submit', onFormElementSubmit);
  initEffect();
};

export { startsForm };

