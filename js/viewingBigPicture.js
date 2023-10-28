const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');
const pictureCancel = bigPicture.querySelector('#picture-cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const isEscapeKey = (evt) => evt.key === 'Escape';

// Создание одного элемента разметки
const makeElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

//Создание разметки одного коментария
const marksComment = (commentsData) => {
  const listItem = makeElement('li', 'social__comment');
  const picture = makeElement('img', 'social__picture');
  picture.src = commentsData.avatar;
  picture.alt = commentsData.name;
  picture.width = '35';
  picture.height = '35';
  listItem.append(picture);

  const socialText = makeElement('p', 'social__text', commentsData.message);
  listItem.append(socialText);
  return listItem;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const oneComment = marksComment(comment);
    fragment.append(oneComment);
  });
  return fragment;
};

//Функция заполняет данными большое фото
const fillsDataBigPicture = ({url, description, likes, comments}) => {
  bigPictureImg.querySelector('img').src = url;
  likesCount.textContent = likes;
  socialCommentTotalCount.textContent = comments.length;
  socialCaption.textContent = description;
  const fragmentComments = renderComments(comments);
  socialComments.append(fragmentComments);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture (data) {
  bigPicture.classList.remove('hidden');
  fillsDataBigPicture(data);

  document.addEventListener('keydown', onDocumentKeydown);
  body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
}

function closeBigPicture () {
  socialComments.innerHTML = '';
  bigPicture.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
  body.classList.remove('modal-open');
}

const viewingBigPicture = (thumbnail, data) => {
  thumbnail.addEventListener('click', () => {
    openBigPicture(data);
  });
  pictureCancel.addEventListener('click', () => {
    closeBigPicture();
  });
};

export {viewingBigPicture};
